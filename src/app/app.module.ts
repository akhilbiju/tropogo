import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

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
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { DiscardModalComponent } from './shared/modals/discard/discard-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { PreviewComponent } from './shared/modals/preview/preview.component';

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
    DiscardModalComponent,
    PreviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatSliderModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatDialogModule,
    MatButtonModule,
    MatExpansionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMenuModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxJsonViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
