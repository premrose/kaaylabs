import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Models } from './models';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private url = "https://api.punkapi.com/v2/beers";

  constructor(private http: HttpClient) { }

  getData(page: number): Observable<Models[]> {
    return this.http.get<any>(this.url + "?page=" + page + "&per_page=10",)
  }

  getSearch(search: string): Observable<Models[]> {
    return this.http.get<any>(this.url + "?beer_name=" + search,)
  }

}
