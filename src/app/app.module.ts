import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { InputComponent } from './shared/input/input.component';
import { BatchComponent } from './shared/batch/batch.component';
import { FileUploadComponent } from './shared/file-upload/file-upload.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { LogoComponent } from './shared/logo/logo.component';
import { SelectboxComponent } from './shared/selectbox/selectbox.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFieldDirective,
    InputComponent,
    BatchComponent,
    FileUploadComponent,
    AddDataComponent,
    DashboardComponent,
    LogoComponent,
    SelectboxComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
