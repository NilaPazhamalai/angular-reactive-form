export class Account {
    id = '';
    number = '';
    type = '';
    holder_id = '';
    balance = 0;
}

export class Transaction {
    id = '';
    source_Account_number = '';
    target_account_number = '';
    date: Date;
    amount = 0;
}

export class TransactionDetail {
    sourceAccount: Account;
    sourceAccountHolder: User;
    targetAccount: Account;
    targetAccountHolder: User;
    date: Date;
    amount = 0;
}

export class User {
    id: string;
    username: string;
    email: string;
}

export const accountType = ['current', 'savings', 'RD'];

export const accounts = [
    {_id: '12', number: 'as22', type: accountType[0], holder_id: '221', balance: 7878},
    {_id: '13', number: 'as23', type: accountType[1], holder_id: '222', balance: 55},
    {_id: '14', number: 'as24', type: accountType[0], holder_id: '223', balance: 333},
    {_id: '15', number: 'as25', type: accountType[1], holder_id: '224', balance: 7811178},
];
