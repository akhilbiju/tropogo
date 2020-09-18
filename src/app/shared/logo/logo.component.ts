import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
})
export class LogoComponent implements OnInit {
  @ViewChild('fileInput') inputField: ElementRef;
  field: any;
  group: FormGroup;

  constructor() {}

  ngOnInit(): void {}

  getUrl() {
    const placeHolder = 'assets/ic_logoiid.png';
    let selectedImage = null;
    if (this.group.get(this.field.name).value) {
      selectedImage = this.group.get(this.field.name).value.data;
    }
    return `url(${selectedImage ? selectedImage : placeHolder})`;
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      for (let i = 0; i < event.target.files.length; i++) {
        let reader = new FileReader();
        const file = event.target.files[i];
        const fileName = file.name;
        reader.onload = () => {
          this.group.get(this.field.name).setValue({
            data: reader.result,
            name: fileName,
          });
          this.inputField.nativeElement.value = '';
        };
        reader.readAsDataURL(file);
      }
    }
  }
}
