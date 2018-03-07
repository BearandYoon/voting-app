import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ToastOptions } from 'ng2-toastr';
import { ChartComponent } from './chart/chart.component';

export class CustomOption extends ToastOptions {
  positionClass = 'toast-bottom-right';
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToastModule.forRoot()
  ],
  exports: [
    // Shared Modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Angular Material Modules
    BrowserAnimationsModule,
    MaterialModule,
    // components
    ChartComponent
  ],
  declarations: [ChartComponent],
  providers: [{provide: ToastOptions, useClass: CustomOption}]
})
export class SharedModule { }
