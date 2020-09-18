import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { STEP_ITEMS } from 'src/app/constants/form-data';
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

  constructor(private fb: FormBuilder) {}

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
      this.fields = STEP_ITEMS[this.currentStep].data;
    }
  }

  replaceSavedValue() {
    const savedVal = this.masterForm.get(this.activeStepLabel).value;
    const templateData = STEP_ITEMS[this.currentStep].data;
    for (const item of templateData) {
      if (item.isArray) {
        item['value'] = this.masterForm
          .get(this.activeStepLabel)
          .get(item.name);
      } else {
        item['value'] = savedVal[item.name];
      }
    }
    this.fields = templateData;
  }

  updateControl() {
    if (this.masterForm.get(this.activeStepLabel)) {
      this.masterForm.removeControl(this.activeStepLabel);
    }
    this.masterForm.addControl(this.activeStepLabel, this.dynamicForm.form);
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
      console.log(this.masterForm.value);
    }
  }
}
