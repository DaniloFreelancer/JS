"use strict";

if (confirm(`Почати тестування?`)) {
  class TMoney {
    #dollars;
    #exchangeRate;

    constructor(dollars, exchangeRate) {
      this.Dollars = dollars;
      this.ExchangeRate = exchangeRate;
    }

    get Dollars() {
      return this.#dollars;
    }

    set Dollars(dollars) {
      if (dollars < 0) throw new Error(`Сума не може бути від'ємною!`);

      this.#dollars = dollars;
    }

    get ExchangeRate() {
      return this.#exchangeRate;
    }

    set ExchangeRate(exchangeRate) {
      if (exchangeRate <= 0) {
        throw new Error(`Курс обміну повинен бути більшим за 0!`);
      }
      this.#exchangeRate = exchangeRate;
    }

    addHryvnia(amountInHryvnia) {
      if (amountInHryvnia < 0)
        throw new Error("Сума у гривнях не може бути від'ємною!");
      // додаємо долари за обмінним курсом(скільки маємо гривень/курс долару)
      const dollarsToAdd = amountInHryvnia / this.ExchangeRate;
      this.Dollars += dollarsToAdd;
    }
    subtractHryvnia(amountInHryvnia) {
      if (amountInHryvnia < 0)
        throw new Error("Сума у гривнях не може бути від'ємною!");
      const dollarsToSubtract = amountInHryvnia / this.ExchangeRate;
      if (this.Dollars - dollarsToSubtract < 0)
        throw new Error("Недостатньо грошей для вилучення цієї суми!");
      this.Dollars -= dollarsToSubtract;
    }
    // Метод визначення курсу, при якому сума у гривнях збільшиться на 100
    findNewExchangeRate(currentRate) {
      if (currentRate <= 0) {
        throw new Error("Поточний курс обміну повинен бути більшим за 0!");
      }
      return currentRate * (1 + 100 / (currentRate * 100)); // Формула для збільшення на 100 грн
    }
    toString() {
      return `Сума в доларах: $${this.Dollars.toFixed(2)}, Курс обміну: ${
        this.#exchangeRate
      } грн за долар.`;
    }
  }
  try {
    const money = new TMoney(100, 41);

    console.log(money.toString());

    money.addHryvnia(3800);
    console.log(money.toString());

    money.subtractHryvnia(1900);
    console.log(money.toString());

    const newRate = money.findNewExchangeRate(money.ExchangeRate);
    console.log(`Новий курс: ${newRate.toFixed(2)} грн за долар.`);
  } catch (error) {
    console.log(error.message);
  }
}
