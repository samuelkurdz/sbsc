import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgComponent } from './svg/svg.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SvgComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    SvgComponent,
    HttpClientModule
  ]
})
export class SharedModule { }
