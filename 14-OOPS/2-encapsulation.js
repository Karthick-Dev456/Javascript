// Example of Encapsulation using private class fields

class BankAccount {
    // Private field: can only be accessed and modified from inside this class
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    // Public method to modify the private state safely
    deposit(amount) {
        if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
        } else {
        console.log("Deposit amount must be positive.");
        }
    }

    // Public method to retrieve the private state safely
    getBalance() {
        return this.#balance;
    }
}

const myAccount = new BankAccount(100);
console.log(myAccount)
myAccount.deposit(50);
console.log("Current Balance:", myAccount.getBalance());

// Attempting to access the private field directly will result in a Syntax Error:
// console.log(myAccount.#balance); 