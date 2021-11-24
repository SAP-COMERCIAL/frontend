import { Component, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

	data = [
		{id: 1, name: 'Rajesh', email: 'rajesh@gmail.com'},
		{id:2, name: 'Paresh', email: 'paresh@gmail.com'},
		{id:3, name: 'Naresh', email: 'naresh@gmail.com'},
		{id:4, name: 'Suresh', email: 'suresh@gmail.com'},
		{id:5, name: 'Karan', email: 'karan@gmail.com'},
	  ];
	  displayedColumns = ['id', 'name', 'email'];

	ngAfterViewInit() { }

}
