import { Component, OnInit } from '@angular/core';
import { ChartData, User } from 'src/app/models/general.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'sbsc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: User = {
    id: undefined,
    logged_user: undefined,
    notification_count: undefined
  };

  chartData: ChartData[] = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.userService.getUser().subscribe((response) => {
      console.log(response[0]);

      const { id, logged_user, notification_count, chart_stat } = response[0];
      
    })
  }
}
