import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/general.interface';

@Component({
  selector: 'sbsc-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Input() user: User = {};
  constructor() { }

  ngOnInit(): void {
  }

}
