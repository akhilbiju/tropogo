import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { STEP_ITEMS } from './constants/form-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;
  currentStep = 0;
  fields = [];
  masterForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  get activeStepLabel() {
    return STEP_ITEMS[this.currentStep].label;
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
      console.log(JSON.stringify(savedVal[item.name]));
      item['value'] = savedVal[item.name];
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
