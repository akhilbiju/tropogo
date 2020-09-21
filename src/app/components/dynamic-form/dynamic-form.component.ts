import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input() fields: any[] = [];
  @Input() title: string;
  @Output() skip = new EventEmitter();
  form: FormGroup;
  showError = false;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  ngOnInit() {
    this.form = this.createControl();
  }

  ngOnChanges() {
    this.form = this.createControl();
  }

  /**
   * Create form controls and add to the form group
   */
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

  /**
   * Binds the form control validators
   * @param validations - List of validations
   */
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

  /**
   * Emit skip page event to parent
   */
  skipPage() {
    this.skip.emit();
  }

  /**
   * Handle error toast close
   */
  closeError() {
    this.showError = false;
  }
}
