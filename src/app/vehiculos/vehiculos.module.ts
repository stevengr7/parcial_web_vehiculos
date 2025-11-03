import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { VehiculosListComponent } from './vehiculos-list/vehiculos-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    VehiculosListComponent 
  ],
  exports: [
    VehiculosListComponent 
  ]
})
export class VehiculosModule { }
