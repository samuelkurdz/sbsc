import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartData } from '../models/general.interface';

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
	constructor(
		private http: HttpClient
	) { }
	
	getUser() {
		return this.http.get<responseData[]>(`${this.url}`);
	}
}