import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './data-model';

@Injectable()
export class UserService {


  delayMs = 500;
  localhost = 'http://localhost:3000/';
  restEndpoint = 'api/users';
  questionMark = '?';
  and = '&';
  token = 'access_token=nKRwLBIh70zT1euPzkf5tdS9dmwu2zoGBKkuIZzzsCkxsmqElbdHl1tHOKKC1vNV';
  usersURL = this.localhost + this.restEndpoint + this.questionMark + this.token;


  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersURL);
  }

  findUser(id: string): Observable<User> {
    const paramId = `/${id}`;
    const url = `${this.localhost + this.restEndpoint}${paramId}${this.questionMark}${this.token}`;
    return this.http.get<User>(url);
  }

}
