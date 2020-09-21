import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css'],
})
export class BatchComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (!this.t.controls.length) {
      this.t.push(this.createInitalGroup());
    }
  }

  /**
   * Just an helper to retrieve language control
   * @param group Group object
   */
  getLangControl(group: FormGroup) {
    return group.get('Language');
  }

  /**
   * Filter option values based on user input
   * @param batch the batch group object
   */
  getFilterValue(batch: FormGroup) {
    const controlValue = batch.get('City').value;
    if (controlValue) {
      return this.cities.filter((data) =>
        data.toLowerCase().includes(controlValue.toLowerCase())
      );
    }
    return this.cities;
  }

  /**
   * A helper method to return the error state
   * @param group The form group object
   * @param controlName The form control name
   */
  getErrorState(group: FormGroup, controlName: string) {
    return group.get(controlName).errors && group.get(controlName).touched;
  }

  /**
   * Transform date into required format
   * @param group Batch group
   * @param control The data control object
   */
  extractDate(group: FormGroup, control) {
    const value = group.get(control).value;
    if (!value) {
      return 'DD MMM';
    }
    const day = `0${value.getDate()}`.slice(-2);
    const month = this.monthShortNames[value.getMonth()];
    return `${day} ${month}`;
  }

  /**
   * Create an batch group template
   */
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

  /**
   * Reset a batch data
   * @param group Batch group to be reset
   */
  resetBatch(group: FormGroup) {
    group.reset();
  }

  /**
   * Delete an existing batch form
   * @param index Index of batch from to be deleted
   */
  deleteBatch(index) {
    this.t.removeAt(index);
  }

  /**
   * Add new batch form
   */
  addBatch() {
    this.accordion.closeAll();
    this.t.push(this.createInitalGroup());
  }

  /**
   * Stop event propogation - To prevent events fired from the parent elements
   * @param $event Click event
   */
  onEvent($event) {
    $event.stopPropagation();
  }
}
