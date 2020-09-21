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
import { LogoComponent } from '../shared/logo/logo.component';
import { SelectboxComponent } from '../shared/selectbox/selectbox.component';

const componentMapper = {
  input: InputComponent,
  batch: BatchComponent,
  files: FileUploadComponent,
  logo: LogoComponent,
  select: SelectboxComponent,
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
    //Generate factory component of the required type
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    );
    //Create form component from the factory object
    this.componentRef = this.contaier.createComponent(factory);

    // Assign values for the component variables
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}
