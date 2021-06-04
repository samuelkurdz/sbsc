import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule, routedPagesComponents } from './pages-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { ChartComponent } from './chart/chart.component';



@NgModule({
  declarations: [
    ...routedPagesComponents,
    SidebarComponent,
    TopbarComponent,
    ProfileComponent,
    ChartComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
