import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  @ViewChild('fileInput') inputField: ElementRef;
  field: any;
  group: FormGroup;
  touched = false;

  get isRequired() {
    return (
      this.field.validations[0] && this.field.validations[0].name === 'required'
    );
  }

  get f() {
    return this.group.controls;
  }
  get t() {
    return this.f[this.field.name] as FormArray;
  }

  get formField() {
    return this.group.get(this.field.name);
  }
  constructor(private cd: ChangeDetectorRef, private fb: FormBuilder) {}

  setValidators() {
    if (this.field.validations.length) {
      this.t.setValidators(this.field.validations[0].validator);
      this.t.updateValueAndValidity();
    }
  }

  ngOnInit(): void {
    this.setValidators();
    this.t.markAsUntouched();
  }

  deleteImage(index) {
    this.touched = true;
    this.t.removeAt(index);
  }

  onFileChange(event) {
    this.touched = true;
    if (event.target.files && event.target.files.length) {
      for (let i = 0; i < event.target.files.length; i++) {
        let reader = new FileReader();
        const [file] = event.target.files;
        const fileName = file.name;
        reader.onload = () => {
          this.t.push(
            this.fb.group({
              data: reader.result,
              name: fileName,
            })
          );
          // need to run CD since file load runs outside of zone
          this.cd.markForCheck();
          this.inputField.nativeElement.value = '';
        };
        reader.readAsDataURL(file);
      }
    }
  }
}
