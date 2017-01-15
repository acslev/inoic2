import {Injectable, Inject} from '@angular/core';
import {AuthHttp} from "angular2-jwt";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {Data} from '../models/data';
import {Http} from "@angular/http";
import {propertiesToken} from "../app/properties";
import {User} from "../models/user";

@Injectable()
export class UserService {
  apiUrl = this.properties.API_URL + 'login';

  constructor(public http: Http, public authHttp: AuthHttp, @Inject(propertiesToken) public properties) {
  }

  login(user: User): Observable<User> {
    return this.http.post(`${this.apiUrl}`, user)
      .map(res => <User>res.json());
  }

}
