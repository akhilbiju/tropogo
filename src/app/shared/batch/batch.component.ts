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

  get f() {
    return this.group.controls;
  }
  get t() {
    return this.f[this.field.name] as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  updateForm() {}

  ngOnInit(): void {
    if (!this.t.controls.length) {
      this.t.push(this.createInitalGroup());
    }
  }

  createInitalGroup() {
    return this.fb.group({
      name: ['', Validators.required],
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
