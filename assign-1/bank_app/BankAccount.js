// BankAccount class definition
class BankAccount {
    constructor(accountNumber, ownerName, balance) {
      this.accountNumber = accountNumber;
      this.ownerName = ownerName;
      this.balance = balance;
    }

    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }

    withdraw(amount) {
      if (amount > this.balance) {
        console.log("Insufficient funds");
      } else {
        this.balance -= amount;
        console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
      }
    }

    getBalance() {
      return this.balance;
    }

    displayAccountInfo() {
      console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Owner Name: ${this.ownerName}`);
      console.log(`Balance: $${this.balance}`);
    }
  }

  // Create instances of the BankAccount class
  const account1 = new BankAccount(1001, "John Doe", 500);
  const account2 = new BankAccount(1002, "Jane Smith", 1000);

  // Demonstrate functionality
  console.log("Initial Account Information:");
  account1.displayAccountInfo();
  account2.displayAccountInfo();

  console.log("\nDeposit and Withdrawal Transactions:");

  // Deposit and withdraw from account1
  account1.deposit(200);
  account1.withdraw(100);

  // Deposit and try to withdraw more than balance from account2
  account2.deposit(300);
  account2.withdraw(1500);

  console.log("\nUpdated Account Information:");
  account1.displayAccountInfo();
  account2.displayAccountInfo();