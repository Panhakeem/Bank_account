class BankAccount {
    constructor(accountNumber, balance) {
      this.accountNumber = accountNumber;
      this.balance = balance;
      console.log(`Acc No.: ${accountNumber}`);
      console.log(`Opening Balance: $${balance}`);    
    }
transactionHistory = ['Deposited 10000 into Savings Account', 'Withdrawn 5000 from Savings Account'];
getBalance() {
    console.log(`Balance: $${this.balance}`);
  }

deposit(amount) {
    this.balance += amount;
    console.log(`Deposited: $${amount}`);
  }

withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn: $${amount}`);
    } 
    else 
    {
      console.log(`Want to withdrawn: $${amount}`);
      console.log('Insufficient balance');
    }
  }

getTransactionHistory() {
    console.log('Transaction History');
    this.transactionHistory.forEach((transaction, index) => {
      console.log(`${index + 1}) ${transaction}`);
    });
  }
}

const Account = new BankAccount('SB-1234', 5000);
console.log(Account.getBalance());
// Expected Output: 5000

Account.deposit(4000);
console.log(Account.getBalance());
// Expected Output: 9000

Account.withdraw(3000);
console.log(Account.getBalance());
// Expected Output: 6000

console.log(Account.getTransactionHistory());

