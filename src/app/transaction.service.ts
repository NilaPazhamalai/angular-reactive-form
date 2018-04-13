import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Transaction } from './data-model';
@Injectable()
export class TransactionService {

  localhost = 'http://localhost:3000/';
  transactionsRest = 'api/Transactions';
  token = '?access_token=nKRwLBIh70zT1euPzkf5tdS9dmwu2zoGBKkuIZzzsCkxsmqElbdHl1tHOKKC1vNV';
  transactionsURL = this.localhost + this.transactionsRest + this.token;


  constructor(
    private http: HttpClient,
  ) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionsURL);
  }

  findTransaction(id): Observable<Transaction> {
    return this.http.get<Transaction>(this.transactionsURL + '/' + id);
  }
}

  /* updateAccount(account: Account): Observable<Account> {
    /* const oldAcc = accounts.find(h => h._id === account._id);
    const newAcc = Object.assign(oldAcc, account); // Demo: mutate cached hero
    return of(newAcc).delay(this.delayMs); // simulate latency with delay
    return this.http.put<Account>(this.accountsURL, account);
  } */
