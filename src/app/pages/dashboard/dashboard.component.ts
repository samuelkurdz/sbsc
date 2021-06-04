import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sbsc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addFocusStyle(event: Event) {
    console.log(event);
  }

}
