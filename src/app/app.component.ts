import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Models } from './models';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'kaaylabs';
  page: number = 1;
  totalpages: number = 325;

  constructor(private services:ServicesService, private http: HttpClient){}

  models: Models[] = [];

  ngOnInit() {
    this.getDatas()
  }

  getDatas() {
    this.services.getData(this.page).subscribe(model => this.models = model);
  }

  pageChangeEvent(event: number){
    this.page = event;
    this.getDatas();
  }

  search(){}

}




// Hi Prem

// Design a Angular app to display the output from the below api in a table.
// API : https://api.punkapi.com/v2/beers?page=<<page_number>>&per_page=10
// There should be a pagination control below the table to show only 10 records at a time
// Page number <<page_number>> should be passed dynamically to the above api from the pagination control
// Implement an input box above the table, filter the table by "name" field as the user keys in the input box .
// Use redux actions and reducers.
// Use bootstrap to style the table

// Let me know if you have any questions.
