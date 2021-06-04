import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartData } from '../models/general.interface';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

interface responseData {
	id: string,
	logged_user: string,
	notification_count: number,
	chart_stat: ChartData[]
	
}

@Injectable({
	providedIn: 'root'
})
export class UserService {

	url = 'https://609e799e33eed800179589ba.mockapi.io/v4/dashboard';

	private loginSource = new BehaviorSubject(false);
  currentLoginState = this.loginSource.asObservable();

	constructor(
		private http: HttpClient,
		private router: Router
	) { }
	
	getUser() {
		return this.http.get<responseData[]>(`${this.url}`);
	}

	changeLoginState() {
		this.loginSource.next(true);
		this.router.navigateByUrl('/');
	}
}