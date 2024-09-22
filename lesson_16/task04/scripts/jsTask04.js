"use strict";
if (confirm(`Почати тестування?`)) {
  class TBankomat {
    // приватні поля
    #nominals = {
      5: 0, // гривня: кількість
      10: 0,
      20: 0,
      50: 0,
      100: 0,
      200: 0,
    };

    constructor(nominals) {
      // Ініціалізація кількості купюр для кожного номіналу
      this.Nominals = nominals;
    }

    get Nominals() {
      return this.#nominals;
    }

    // Захищаємо поля номіналів
    set Nominals(nominals) {
      for (let key in nominals) {
        if (nominals[key] < 0)
          throw new Error("Кількість купюр не може бути від'ємною!");
        this.#nominals[key] = nominals[key];
      }
    }

    // Метод для отримання максимальної суми
    getMaxSum() {
      let maxSum = 0;
      for (let key in this.Nominals) {
        maxSum += key * this.Nominals[key]; // елемент * властивість елементу
      }
      return maxSum;
    }

    // Метод для отримання мінімальної суми
    getMinSum() {
      for (let key in this.Nominals) {
        if (this.Nominals[key] > 0) return parseInt(key);
      }
      return 0; // Якщо немає жодної купюри
    }

    // Метод зняття суми
    withdraw(amount) {
      let originalAmount = amount;
      let billsToWithdraw = {};

      // Проходимо номінали від найбільшого до найменшого
      for (let key of Object.keys(this.Nominals).sort((a, b) => b - a)) {
        let nominalValue = parseInt(key);
        let count = Math.min(
          Math.floor(amount / nominalValue),
          this.Nominals[key]
        );

        if (count > 0) {
          billsToWithdraw[nominalValue] = count; //елемент об'єкту: властивість
          amount -= count * nominalValue;
        }
      }

      if (amount > 0) {
        return `Неможливо видати суму ${originalAmount} гривень`;
      }

      // Оновлюємо кількість купюр у банкоматі
      for (let nominalValue in billsToWithdraw) {
        this.Nominals[nominalValue] -= billsToWithdraw[nominalValue];
      }

      return `Видано: ${JSON.stringify(billsToWithdraw)}`;
    }

    // Метод toString
    toString() {
      let result = "Купюри у банкоматі:\n";
      for (let key in this.Nominals) {
        result += `${key} грн: ${this.Nominals[key]} шт.\n`;
      }
      return result;
    }
  }

  try {
    const bankomat = new TBankomat({
      5: 10,
      10: 20,
      20: 15,
      50: 5,
      100: 7,
      200: 3,
    });

    console.log(bankomat.toString());
    console.log(`Максимальна сума: ${bankomat.getMaxSum()} грн`);
    console.log(`Мінімальна сума: ${bankomat.getMinSum()} грн`);

    console.log(bankomat.withdraw(780));
    console.log(bankomat.toString()); 
  } catch (error) {
	console.log(error.message)
  }
}
