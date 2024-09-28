"use strict";

if (confirm(`Почати тестування?`)) {
	//множення
  class MultChecker {
    static generateTest() {
      const firstNumber = this.getRandomNumber();
      const secondNumber = this.getRandomNumber();
      const correctAnswer = firstNumber * secondNumber;
      const userAnswer = parseInt(
        prompt(`Скільки буде ${firstNumber} * ${secondNumber}?`)
      );

      return new TestData(
        firstNumber,
        secondNumber,
        "*",
        userAnswer,
        correctAnswer
      );
    }

    static getRandomNumber(min = 1, max = 10) {
      return min + Math.floor(Math.random() * (max - min));
    }
  }
  //додавання
  class AddChecker {
    static getRandomNumber(min = 1, max = 100) {
      return min + Math.floor(Math.random() * (max - min));
    }

    static generateTest() {
      const firstNumber = this.getRandomNumber();
      const secondNumber = this.getRandomNumber();
      const correctAnswer = firstNumber + secondNumber;
      const userAnswer = parseInt(
        prompt(`Скільки буде ${firstNumber} + ${secondNumber}?`)
      );

      return new TestData(
        firstNumber,
        secondNumber,
        "+",
        userAnswer,
        correctAnswer
      );
    }
  }
  //клас для зберігання інформації про кожен тест
  class TestData {
    constructor(
      firstNumber,
      secondNumber,
      operation,
      userAnswer,
      correctAnswer
    ) {
      this.firstNumber = firstNumber;
      this.secondNumber = secondNumber;
      this.operation = operation;
      this.userAnswer = userAnswer;
      this.correctAnswer = correctAnswer;
    }
    toString() {
      return `${this.firstNumber} ${this.operation} ${this.secondNumber} = ${this.userAnswer} (правильна відповідь: ${this.correctAnswer})`;
    }
  }
  //Singleton клас для управління тестами(генерація задач)
  class TestManager {
    static instance;

    constructor(N) {
      if (TestManager.instance) {
        return TestManager.instance;
      }
      this.history = new History();
      this.N = N;
      TestManager.instance = this;
    }

    startTesting() {
      let tasksCompleted = 0;
      const testInterval = setInterval(() => {
        if (tasksCompleted >= this.N) {
          clearInterval(testInterval);
          console.log("Тестування завершено.");
          this.history.showHistory();
          return;
        }

        const isAddition = Math.random() > 0.5; // Випадковий вибір операції (множення чи додавання)
        const testData = isAddition
          ? AddChecker.generateTest()
          : MultChecker.generateTest();
        this.history.addTestResult(testData);

        tasksCompleted++;
      }, 2000); // Інтервал між тестами 2 секунди
    }
  }
  //зберігвання історії тестування
  class History {
    constructor() {
      this.testsList = [];
    }

    // Додає новий результат тестування до історії
    addTestResult(testData) {
      this.testsList.push(testData);
    }

    // Показує всю історію
    showHistory() {
      console.log("Історія тестування:");
      this.testsList.forEach((test, index) => {
        console.log(`${index + 1}. ${test.toString()}`);
      });
    }
  }

  const testManager = new TestManager(5); // N = 5 задач
  testManager.startTesting();
}
