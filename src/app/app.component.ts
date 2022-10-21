import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Models } from './models';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  title = 'kaaylabs';
  page: number = 1;
  totalpages: number = 325; // can't get the total count cause it's seperated by 10 & 24
  search: string = "";

  constructor(private services:ServicesService, private http: HttpClient){}

  models: Models[] = [];
  searches: Models[] = [];
  searchesLength = 0;

  ngOnInit() {
    this.getDatas();
    this.searchButton();
  }

  getDatas() {
    this.services.getData(this.page).subscribe(
      model => this.models = model,
    );
  }

  pageChangeEvent(event: number){
    this.page = event;
    this.getDatas();
  }

  searchButton(){
    this.services.getSearch(this.search).subscribe(
      searche => this.searches = searche,
    );
    this.searchesLength = this.searches.length;
  }

}
