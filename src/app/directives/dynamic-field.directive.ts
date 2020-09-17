import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BatchComponent } from '../shared/batch/batch.component';
import { FileUploadComponent } from '../shared/file-upload/file-upload.component';
import { InputComponent } from '../shared/input/input.component';

const componentMapper = {
  input: InputComponent,
  batch: BatchComponent,
  files: FileUploadComponent,
};

@Directive({
  selector: '[dynamicField]',
})
export class DynamicFieldDirective implements OnInit {
  @Input() field: any;
  @Input() group: FormGroup;
  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private contaier: ViewContainerRef
  ) {}

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    );
    this.componentRef = this.contaier.createComponent(factory);

    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}
