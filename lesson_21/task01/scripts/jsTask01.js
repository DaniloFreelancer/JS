"use strict";

if (confirm(`Почати тестування?`)) {
  class Client {
    constructor(id, fullName, balance) {
      this.id = id;
      this.fullName = fullName;
      this.balance = balance;
    }
    deposit(amount) {
      this.balance += amount;
      console.log(
        `${this.fullName} додав(ла) ${amount} грн на рахунок. Баланс: ${this.balance} грн.`
      );
    }

    withdraw(amount) {
      this.balance -= amount;
      console.log(
        `${this.fullName} зняв(ла) ${amount} грн. Баланс: ${this.balance} грн.`
      );
    }

    toString() {
      return `ID: ${this.id}, ПІБ: ${this.fullName}, Баланс: ${this.balance} грн.`;
    }
  }

  class GoldenClient extends Client {
    constructor(id, fullName, balance, creditLimit, creditInterest) {
      super(id, fullName, balance); // Викликаємо конструктор класу Client
      this.creditLimit = creditLimit;
      this.creditInterest = creditInterest;
      this.creditUsed = 0;
    }

    withdraw(amount) {
      if (this.balance >= amount) {
        super.withdraw(amount);
      } else {
        //Надаємо користувачу кредит
        const totalAvailable =
          this.balance + (this.creditLimit - this.creditUsed);
        if (totalAvailable >= amount) {
          const creditNeeded = amount - this.balance;
          this.creditUsed += creditNeeded;
          this.balance = 0;
          console.log(
            `${
              this.fullName
            } використав(ла) ${creditNeeded} грн кредиту. Залишок кредиту: ${
              this.creditLimit - this.creditUsed
            } грн.`
          );
        } else {
          throw new Error(
            `${this.fullName} не має достатньо коштів для зняття ${amount} грн, навіть з кредитом.`
          );
        }
      }
    }

    calculatePenalty() {
      const penalty = (this.creditUsed * this.creditInterest) / 100;
      return penalty;
    }

    toString() {
      return `ID: ${this.id}, ПІБ: ${this.fullName}, Баланс: ${this.balance} грн, Використаний кредит: ${this.creditUsed} грн, Ліміт кредиту: ${this.creditLimit} грн.`;
    }
  }

  console.log("==== Golden Client ====");

  try {
    const goldenClient = new GoldenClient(
      2,
      "Стиценко Марія Іванівна",
      1000,
      2000,
      5
    ); // Ліміт кредиту 2000, відсоток 5%
    console.log(goldenClient.toString());
    goldenClient.withdraw(1500);
    goldenClient.deposit(3000);
    goldenClient.withdraw(2000);
    const penalty = goldenClient.calculatePenalty();
    console.log(
      `Пеня за використання кредиту для ${goldenClient.fullName}: ${penalty} грн.`
    );
    console.log(goldenClient.toString());
  } catch (error) {
    console.log(error.message);
  }
}
