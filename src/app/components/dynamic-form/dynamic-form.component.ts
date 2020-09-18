import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input() fields: any[] = [];
  @Input() title: string;
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.createControl();
  }

  ngOnChanges() {
    this.form = this.createControl();
  }

  createControl() {
    const group = this.fb.group({});
    this.fields.forEach((field) => {
      const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      group.addControl(
        field.name,
        field.isArray
          ? field.value instanceof FormArray
            ? field.value
            : this.fb.array(field.value)
          : control
      );
    });
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length) {
      const validationList = [];
      validations.forEach((element) => {
        validationList.push(element.validator);
      });
      return Validators.compose(validationList);
    }
    return null;
  }
}
