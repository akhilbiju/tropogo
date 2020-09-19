import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { STEP_ITEMS } from 'src/app/constants/form-data';
import { DiscardModalComponent } from 'src/app/shared/modals/discard/discard-modal.component';
import { PreviewComponent } from 'src/app/shared/modals/preview/preview.component';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css'],
})
export class AddDataComponent implements OnInit {
  @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;
  currentStep = 0;
  fields = [];
  masterForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {}

  get stepLength() {
    return STEP_ITEMS.length;
  }

  get activeStepLabel() {
    return STEP_ITEMS[this.currentStep].label;
  }

  get activeStepHeader() {
    return STEP_ITEMS[this.currentStep].header;
  }

  ngOnInit(): void {
    this.masterForm = this.fb.group({});
    this.createForm();
  }

  createForm() {
    if (this.masterForm.get(this.activeStepLabel)) {
      this.replaceSavedValue();
    } else {
      this.fields = [...STEP_ITEMS[this.currentStep].data];
    }
  }

  replaceSavedValue() {
    const savedVal = this.masterForm.get(this.activeStepLabel).value;
    const templateData = [...STEP_ITEMS[this.currentStep].data];
    for (let index = 1; index < templateData.length; index++) {
      const cloneItem = { ...templateData[index] };
      if (cloneItem.isArray) {
        const controlGroup = this.masterForm.get(this.activeStepLabel);
        cloneItem['value'] = controlGroup.get(cloneItem.name);
      } else {
        cloneItem['value'] = savedVal[cloneItem.name];
      }
      templateData[index] = cloneItem;
    }
    this.fields = templateData;
  }

  updateControl() {
    if (this.masterForm.get(this.activeStepLabel)) {
      this.masterForm.removeControl(this.activeStepLabel);
    }
    this.masterForm.addControl(this.activeStepLabel, this.dynamicForm.form);
    this.masterForm.get(this.activeStepLabel).markAsDirty();
  }

  goToNextStep() {
    if (this.dynamicForm.form.invalid) {
      this.dynamicForm.form.markAllAsTouched();
    } else {
      this.updateControl();
      this.currentStep += 1;
      this.createForm();
    }
  }

  goToPrevStep() {
    this.updateControl();
    this.currentStep -= 1;
    this.createForm();
  }

  submit() {
    if (this.dynamicForm.form.invalid) {
      this.dynamicForm.form.markAllAsTouched();
    } else {
      this.updateControl();
      this.removeImageData();
      this.dialog.open(PreviewComponent, { data: this.masterForm.value });
    }
  }

  removeImageData() {
    ['Brochure', 'Certificate', 'Gallery'].forEach((controlName: any) => {
      const list = this.masterForm
        .get('Institute')
        .get(controlName) as FormArray;
      list.controls.forEach((group: FormGroup) => {
        group.get('data').setValue('Large data - Removed from preview');
      });
    });
    this.masterForm
      .get('Institute')
      .get('Logo')
      .setValue('Large data - Removed from preview');
  }

  skipPage() {
    if (this.masterForm.dirty || this.dynamicForm.form.dirty) {
      this.dialog
        .open(DiscardModalComponent)
        .afterClosed()
        .subscribe((data) => {
          if (data) {
            this.router.navigateByUrl('/');
          }
        });
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
