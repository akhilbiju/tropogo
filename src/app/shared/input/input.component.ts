import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  field: any;
  group: FormGroup;

  constructor() {}

  get isError() {
    return this.group.get(this.field.name).errors;
  }

  get getFirstError() {
    return this.field.validations.filter(
      (data) => data.name === Object.keys(this.isError)[0]
    )[0];
  }

  get formField() {
    return this.group.get(this.field.name);
  }

  ngOnInit(): void {}
}
