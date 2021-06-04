import { Component, OnInit } from '@angular/core';
import Menus from '../menu-list';

export interface Menu {
  title: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'sbsc-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuList: Menu[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuList = Menus;
  }

}
