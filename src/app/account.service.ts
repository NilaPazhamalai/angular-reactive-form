import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

import { Account, accounts } from './data-model';

@Injectable()
export class AccountService {

  delayMs = 500;

  // Fake server get; assume nothing can go wrong
  getAccounts(): Observable<Account[]> {
    return of(accounts).delay(this.delayMs); // simulate latency with delay
  }

  // Fake server update; assume nothing can go wrong
  updateAccount(account: Account): Observable<Account> {
    const oldAcc = accounts.find(h => h._id === account._id);
    const newAcc = Object.assign(oldAcc, account); // Demo: mutate cached hero
    return of(newAcc).delay(this.delayMs); // simulate latency with delay
  }
}
