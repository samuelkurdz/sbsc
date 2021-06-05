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

  colors = [
    {
      dataCardColor: '#FBFCFE',
      fullCardBgColor: '#FFFFFF',
      totalColor: '#1B5BAC',
      balanceColor: '#E2EDF8',
      textColor: 'black'
    },
    {
      dataCardColor: '#FFF7F5',
      fullCardBgColor: '#FFFFFF',
      totalColor: '#FF6542',
      balanceColor: '#F8E9E2',
      textColor: 'black'
    },
    {
      dataCardColor: '#0A709D',
      fullCardBgColor: 'linear-gradient(0deg, #0F9CDA 26.48%, #00C49A 175.16%)',
      totalColor: '#F6AE2D',
      balanceColor: 'white',
      textColor: 'white'
    }
  ]
  constructor() {
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
