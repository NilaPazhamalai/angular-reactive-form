import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

import { Transaction } from '../data-model';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions: Observable<Transaction[]>;
  selectedTransaction: Transaction;
  isLoading = false;

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions() {
    this.isLoading = true;
    this.transactions = this.transactionService.getTransactions()
      .finally(() => {
        this.isLoading = false;
      });
    this.selectedTransaction = undefined;
  }

  select(transaction: Transaction) {
    this.selectedTransaction = transaction;
  }

}
