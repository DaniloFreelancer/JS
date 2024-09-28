"use strict";

//Створити службове авто (водій, марка, номер).
//Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.

if (confirm(`Почати тестування?`)) {
  class CompanyCar {
    static companyCar;

    constructor({ driver, carBrand, carNumber }) {
      if (CompanyCar.companyCar) {
        return CompanyCar.companyCar;
      }
      this.driver = driver;
      this.carBrand = carBrand;
      this.carNumber = carNumber;

      CompanyCar.companyCar = this;
    }

    toString() {
      return `Driver - ${this.driver}, Car Brand - ${this.carBrand}, Car Number - ${this.carNumber}`;
    }
  }

  const company1 = new CompanyCar({
    driver: `Stepan`,
    carBrand: `Mazda`,
    carNumber: `BA4548BA`,
  });
  console.log(
    ` ${company1.driver}, ${company1.carBrand}, ${company1.carNumber}`
  );
  const company2 = new CompanyCar({
    driver: `Vadim`,
    carBrand: `Tayota`,
    carNumber: `AI8383CB`,
  });
  console.log(
    ` ${company2.driver}, ${company2.carBrand}, ${company2.carNumber}`
  );
}
