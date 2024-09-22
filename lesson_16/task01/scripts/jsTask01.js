"use strict";

if (confirm(`Почати тестування?`)) {
  class TDate {
    // Дні, місяці, роки не можуть бути мінусовими
    #days;
    #months;
    #years;

    constructor(days, months, years) {
      this.Days = days;
      this.Months = months;
      this.Years = years;
    }

    // Days
    get Days() {
      return this.#days;
    }

    set Days(days) {
      if (days < 1 || days > 31) throw new Error(`Введено некоректні дані!`);
      this.#days = days;
    }

    // Months
    get Months() {
      return this.#months;
    }

    set Months(months) {
      if (months < 1 || months > 12)
        throw new Error(`Введено некоректні дані!`);
      this.#months = months;
    }

    // Years
    get Years() {
      return this.#years;
    }

    set Years(years) {
      if (years < 0) throw new Error(`Введено некоректні дані!`);
      this.#years = years;
    }

    // Додавання днів
    addDays(days) {
      this.Days += days;
    }

    // Віднімання днів
    subtractDays(days) {
      this.Days -= days;
    }

    // Додавання місяців
    addMonths(months) {
      const totalMonths = this.Months + months;
      this.Years += Math.floor(totalMonths / 12); // Додаємо роки, якщо місяців більше 12
      this.Months = totalMonths % 12 || 12; // Залишок місяців (12 місяців = 1 рік)
    }

    // Віднімання місяців
    subtractMonths(months) {
      //Загальний місяць
      let totalMonths = this.Months - months;
      if (totalMonths < 1) {
        //беремо число в модуль і округлюємо
        const yearsToSubtract = Math.ceil(Math.abs(totalMonths) / 12);
        // від поточних років віднімаємо роки, які отримали
        this.Years -= yearsToSubtract;
        totalMonths = 12 - (Math.abs(totalMonths) % 12); // Обчислюємо нову кількість місяців
      }
    }

    // Додавання років
    addYears(years) {
      this.Years += years;
    }

    // Віднімання років
    subtractYears(years) {
      this.Years -= years;
    }

    toString() {
      const day = String(this.Days).padStart(2, "0");
      const month = String(this.Months).padStart(2, "0");
      return `${day}.${month}.${this.Years}`;
    }
  }

  try {
    const date = new TDate(12, 3, 2024);

    console.log(date.toString());

    date.addDays(5);
    console.log(date.toString());

    date.subtractDays(10);
    console.log(date.toString());

    date.addMonths(106);
    console.log(date.toString());

    date.addYears(1);
    console.log(date.toString());
  } catch (error) {
    console.log(error.message);
  }
}
