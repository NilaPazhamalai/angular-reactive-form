import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Transaction, TransactionDetail } from '../data-model';
import { TransactionService } from '../transaction.service';
import { AccountService } from '../account.service';
import { UserService } from '../user.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnChanges {


  @Input() transaction: Transaction;
  transactionDetail: TransactionDetail;
  constructor(
    private transactionService: TransactionService,
    private accountService: AccountService,
    private userService: UserService) { }

  ngOnChanges(): void {
    this.initTransactionDetail();
  }

  initTransactionDetail() {
    console.log('transaction' + this.transaction);
    this.transactionDetail = new TransactionDetail();
    this.transactionDetail.amount = this.transaction.amount;
    this.transactionDetail.date = this.transaction.date;
    /* this.accountService.findAccount(this.transaction.source_Account_number)
      .subscribe(
        account => {
          const srcAcc = account[0];
          this.transactionDetail.sourceAccount = srcAcc;
        }
      );
    this.accountService.findAccount(this.transaction.target_account_number)
      .subscribe(
        account => {
          const tgtAcc = account[0];
          this.transactionDetail.targetAccount = tgtAcc;

        }
      );
    if (this.transactionDetail.sourceAccount.id) {
      this.accountService.getAccountHolder(this.transactionDetail.sourceAccount.id)
        .subscribe(
          user => {
            const srcHolder = user;
            this.transactionDetail.sourceAccountHolder = srcHolder;
          }
        );
    }
    if (this.transactionDetail.targetAccount.id) {
      this.accountService.getAccountHolder(this.transactionDetail.targetAccount.id)
        .subscribe(
          user => {
            const tgtHolder = user;
            this.transactionDetail.targetAccountHolder = tgtHolder;
          }
        );
    } */
  }

}
