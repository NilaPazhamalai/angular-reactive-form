import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { accountType, Account } from '../data-model';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']

})
export class AccountDetailComponent implements OnChanges {

  accountFormGroup: FormGroup;
  accountType = accountType;
  @Input() account: Account;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.accountFormGroup = this.fb.group(
      {
        number: ['', [Validators.required, Validators.maxLength(8)]],
        type: ['', [Validators.required]],
        holder_id: ['', [Validators.required, Validators.maxLength(24), Validators.minLength(24)]],
        balance: [0, [Validators.required, Validators.maxLength(8)]],
      }
    );
  }

  /*  ngOnInit() {
   } */

  ngOnChanges() {
    this.rebuildForm();
  }

  rebuildForm() {
    this.accountFormGroup.reset({
      number: this.account.number,
      type: this.account.type,
      holder_id: this.account.holder_id,
      balance: this.account.balance
    });
  }

}
