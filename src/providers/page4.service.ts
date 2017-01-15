import {Injectable, Inject} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {Data} from '../models/data';
import {Http} from "@angular/http";
import {propertiesToken} from "../app/properties";

@Injectable()
export class Page4Service {
  apiUrl = this.properties.API_URL + 'data/';

  constructor(public http: Http, @Inject(propertiesToken) public properties) {
  }

  getAll(): Observable<Data[]> {
    return this.http.get(`${this.apiUrl}/all`)
      .map(res => <Data[]>res.json());
  }

  create(data: Data): Observable<Data> {
    return this.http.post(`${this.apiUrl}/create`, data)
      .map(res => <Data>res.json());
  }

  save(data: Data): Observable<Data> {
    return this.http.post(`${this.apiUrl}/save`, data)
      .map(res => <Data>res.json());
  }

  findById(id: number): Observable<Data> {
    return this.http.get(`${this.apiUrl}/${id}`)
      .map(res => <Data>res.json());
  }

  delete(id: number): Observable<Data> {
    return this.http.delete(`${this.apiUrl}/${id}`)
      .map(res => <Data>res.json());
  }
}
