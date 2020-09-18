import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-selectbox',
  templateUrl: './selectbox.component.html',
  styleUrls: ['./selectbox.component.css'],
})
export class SelectboxComponent implements OnInit {
  field: any;
  group: FormGroup;

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

  constructor() {}

  ngOnInit(): void {}
}
