import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Account, User } from './data-model';

@Injectable()
export class AccountService {


  delayMs = 500;
  localhost = 'http://localhost:3000/';
  accountsRest = 'api/Accounts';
  questionMark = '?';
  and = '&';
  token = 'access_token=nKRwLBIh70zT1euPzkf5tdS9dmwu2zoGBKkuIZzzsCkxsmqElbdHl1tHOKKC1vNV';
  accountsURL = this.localhost + this.accountsRest + this.questionMark + this.token;


  constructor(
    private http: HttpClient,
  ) { }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountsURL);
  }

  updateAccount(account: Account): Observable<Account> {
    return this.http.put<Account>(this.accountsURL, account);
  }

  findAccount(number: string): Observable<Account> {
    const filter = `filter={"where":{"number":"${number}"}}`;
    const url = `${this.localhost + this.accountsRest}${this.questionMark}${filter}${this.and}${this.token}`;
    return this.http.get<Account>(url);
  }
  getAccountHolder(id: string): Observable<User> {
    console.log('user id :' + id);
    const userParam = `/${id}/user_id`;
    const url = `${this.localhost + this.accountsRest}${userParam}${this.questionMark}${this.token}`;
    return this.http.get<User>(url);
  }

  // http://localhost:3000/api/Accounts/5ac49ad866dcc423084b7f5a/user_id?

}
