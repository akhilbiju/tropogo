import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css'],
})
export class BatchComponent implements OnInit {
  field: any;
  group: FormGroup;
  monthShortNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  cities = ['Kolkata', 'Bengaluru', 'Mumbai', 'New Delhi', 'Pune', 'Chennai'];
  languageList = [
    'English',
    'Hindi',
    'Kannada',
    'Malayalam',
    'Tamil',
    'Gujarati',
    'Telugu',
  ];

  get f() {
    return this.group.controls;
  }
  get t() {
    return this.f[this.field.name] as FormArray;
  }

  getLangControl(group: FormGroup) {
    return group.get('Language');
  }

  getFilterValue(batch: FormGroup) {
    const controlValue = batch.get('City').value;
    if (controlValue) {
      return this.cities.filter((data) =>
        data.toLowerCase().includes(controlValue.toLowerCase())
      );
    }
    return this.cities;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (!this.t.controls.length) {
      this.t.push(this.createInitalGroup());
    }
  }

  extractDate(group: FormGroup, control) {
    const value = group.get(control).value;
    if (!value) {
      return 'DD MMM';
    }
    const day = `0${value.getDate()}`.slice(-2);
    const month = this.monthShortNames[value.getMonth()];
    return `${day} ${month}`;
  }

  createInitalGroup() {
    return this.fb.group({
      WeekendCourse: ['', Validators.required],
      StartDate: ['', Validators.required],
      EndDate: ['', Validators.required],
      City: ['', Validators.required],
      Cost: ['', Validators.required],
      Language: ['', Validators.required],
    });
  }

  resetBatch(group: FormGroup) {
    group.reset();
  }

  deleteBatch(index) {
    this.t.removeAt(index);
  }

  addBatch() {
    this.t.push(this.createInitalGroup());
  }

  onEvent($event) {
    $event.stopPropagation();
  }
}
