"use strict";

//Створити клас, що дозволяє виконувати такі операції над масивами:
//знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)

if (confirm(`Почати тестування?`)) {
  class CheckArray {
    constructor(array, targetNumber) {
      this.array = array;
      this.targetNumber = targetNumber;
    }

    static getPositiveNumberFromArray(array) {
      return array.reduce((prevPosNum, element) => {
        if (element > 0) prevPosNum++;
        return prevPosNum;
      }, 0);
    }

    static getNegativeNumberFromArray(array) {
      return array.reduce((prevNegNum, element) => {
        if (element < 0) prevNegNum++;
        return prevNegNum;
      }, 0);
    }

    static countOccurrences(array, targetNumber) {
      return array.reduce((prevNum, element) => {
        if (element === targetNumber) prevNum++;
        return prevNum;
      }, 0);
    }

    toString() {
      return `Кількість додатних значень - ${CheckArray.getPositiveNumberFromArray(
        this.array
      )}; \n Кількість від'ємних значень - ${CheckArray.getNegativeNumberFromArray(
        this.array
      )}; \n Число ${this.targetNumber} входить у масив ${CheckArray.countOccurrences(
        this.array,
        this.targetNumber
      )} рази.`;
    }
  }

  const array = [1, 2, 2, 3, -1, -2, 4, 27, -5, -7, 9];

  const newArray = new CheckArray(array, 2);
  console.log(` ${newArray}`);
}
