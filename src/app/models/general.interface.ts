export interface User {
	id?: string;
	logged_user?: string;
	notification_count?: number
}

export interface ChartData {
	balance?: number;
	label?:  string;
	spent?: number;
}
