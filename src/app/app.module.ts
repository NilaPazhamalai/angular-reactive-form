import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountService } from './account.service';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionService } from './transaction.service';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountDetailComponent,
    AccountListComponent,
    TransactionListComponent,
    TransactionDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [AccountService, TransactionService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
