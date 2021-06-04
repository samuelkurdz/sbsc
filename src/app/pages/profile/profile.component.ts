import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartData, User } from 'src/app/models/general.interface';

@Component({
  selector: 'sbsc-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnChanges {

  @Input() user: User = {};
  @Input() charts: ChartData[] = [];
  firstName: string | undefined;
  presentDate;
  parsedDate = '';
  constructor( ) {
    this.presentDate = new Date().toDateString();
    this.firstName = this.user.logged_user?.split(' ')[0];
  }

  ngOnInit(): void {
    this.parseDate();
  }

  parseDate() {
    let dateArr = this.presentDate.split(' ');
    this.parsedDate = `${dateArr[0]}, ${dateArr[1]} ${dateArr[2]}, ${dateArr[3]}`
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.firstName = this.user.logged_user?.split(' ')[0];
  }

}
