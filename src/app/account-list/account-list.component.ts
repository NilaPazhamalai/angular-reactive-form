import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

import { Account } from '../data-model';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts: Observable<Account[]>;
  selectedAccount: Account;
  isLoading = false;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.getAccounts();
  }

  getAccounts() {
    this.isLoading = true;
    this.accounts = this.accountService.getAccounts()
      .finally(() => {
        this.isLoading = false;
      });
    this.selectedAccount = undefined;
  }

  select(account: Account) {
    this.selectedAccount = account;
  }

}
