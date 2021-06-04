import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule, routedAuthComponents } from './auth-routing.module';



@NgModule({
  declarations: [
    ...routedAuthComponents
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
