import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule, routedPagesComponents } from './pages-routing.module';



@NgModule({
  declarations: [
    ...routedPagesComponents,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
