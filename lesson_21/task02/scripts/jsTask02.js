"use strict";

if (confirm(`Почати тестування?`)) {
  class Client {
    constructor(id, name, balance) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }

    deposit(amount) {
      this.balance += amount;
      console.log(
        `${this.name} додав ${amount} грн на рахунок. Баланс: ${this.balance} грн.`
      );
    }

    withdraw(amount) {
      this.balance -= amount;
      console.log(
        `${this.name} зняв ${amount} грн. Баланс: ${this.balance} грн.`
      );
    }

    toString() {
      return `ID: ${this.id}, ПІБ: ${this.name}, Баланс: ${this.balance} грн.`;
    }
  }

  class GoldenClient extends Client {
    constructor(id, name, balance, creditLimit, creditRate) {
      super(id, name, balance);
      this.creditLimit = creditLimit;
      this.usedCredit = 0;
      this.creditRate = creditRate; // Відсоток пені за кредит
    }

    withdraw(amount) {
      if (this.balance >= amount) {
        super.withdraw();
      } else {
        const remainingAmount = amount - this.balance;
        this.balance = 0;
        if (this.creditLimit >= remainingAmount) {
          this.usedCredit += remainingAmount;
          this.creditLimit -= remainingAmount;
          console.log(
            `${this.name} використав ${remainingAmount} грн кредиту. Залишок кредиту: ${this.creditLimit} грн.`
          );
        } else {
          console.log(
            `Недостатньо коштів, щоб зняти ${amount} грн, навіть з кредитом.`
          );
        }
      }
    }

    calculatePenalty() {
      const penalty = this.usedCredit * (this.creditRate / 100);
      return penalty;
    }

    toString() {
      return `ID: ${this.id}, ПІБ: ${this.name}, Баланс: ${this.balance} грн, Використаний кредит: ${this.usedCredit} грн, Ліміт кредиту: ${this.creditLimit} грн.`;
    }
  }

  class Bank {
    constructor() {
      this.clients = []; // Масив для зберігання клієнтів
    }

    addClient(client) {
      this.clients.push(client);
    }

    // Вивести всіх простих клієнтів
    showSimpleClients() {
      console.log("Прості клієнти:");
      //Перевіряє елементи масиву
      this.clients.forEach((client) => {
        //Якщо клієнт не є екземпляром класу GoldenClient, а тобто цей клієнт належить класу Client
		  //тобто ми дивимось, що якщо елемент в масиві пішов з класу Client - то він точно не належатиме GoldenClient
        if (!(client instanceof GoldenClient)) {
          console.log(client.toString());
        }
      });
    }

    // Вивести всіх Golden клієнтів
    showGoldenClients() {
      console.log("Golden клієнти:");
      this.clients.forEach((client) => {
        if (client instanceof GoldenClient) {
          console.log(client.toString());
        }
      });
    }

    // Підрахувати загальну суму грошей на рахунках всіх клієнтів
    totalBalance() {
      const totalBalance = this.clients.reduce((accumulator, client) => {
        return accumulator + client.balance;
      }, 0);

      return totalBalance;
    }
  }

  // Створюємо клієнтів
  const client1 = new Client(1, "Іван Іванов", 1000);
  const client2 = new Client(2, "Петро Петренко", 2000);
  const goldenClient1 = new GoldenClient(3, "Марія Петрова", 3000, 5000, 5);
  const goldenClient2 = new GoldenClient(4, "Оксана Сидорова", 5000, 3000, 4);

  // Створюємо банк і додаємо клієнтів
  const bank = new Bank();
  bank.addClient(client1);
  bank.addClient(client2);
  bank.addClient(goldenClient1);
  bank.addClient(goldenClient2);

  // Виводимо простих клієнтів
  bank.showSimpleClients();

  // Виводимо Golden клієнтів
  bank.showGoldenClients();

  // Показуємо загальну кількість грошей на рахунках
  console.log(
    `Загальна кількість грошей на рахунках: ${bank.totalBalance()} грн.`
  );
}
