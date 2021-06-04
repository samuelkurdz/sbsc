import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ChartData, User } from '../models/general.interface';

@Injectable({
	providedIn: 'root'
})
export class CommunicationService {
	
	user: User = {
    id: undefined,
    logged_user: undefined,
    notification_count: undefined
  };

	chartData: ChartData[] = [];

  private userSource = new BehaviorSubject(this.user);
  currentUser = this.userSource.asObservable();


	private chartSource = new BehaviorSubject(this.chartData);
  currentChartData = this.chartSource.asObservable();

  constructor() { }

  updateUser(chart: ChartData[]) {
    this.chartSource.next(chart);
  }
	
}