class MultChecker {
  constructor(number) {
    this.number = number; // Число для перевірки
    this.correctAnswers = 0; // Кількість правильних відповідей
    this.wrongAnswers = 0; // Кількість неправильних відповідей
  }

  // Генерування прикладу для перевірки
  generateExample() {
    // Випадкове число від 1 до 10
    this.randomNumber = Math.floor(Math.random() * 10) + 1;
    return `${this.number} * ${this.randomNumber} = ?`;
  }

  // Перевірка правильності відповіді
  checkAnswer(userAnswer) {
    const correctAnswer = this.number * this.randomNumber;
    if (userAnswer === correctAnswer) {
      this.correctAnswers++;
      return `Правильно! ${this.number} * ${this.randomNumber} = ${correctAnswer}`;
    } else {
      this.wrongAnswers++;
      return `Неправильно! ${this.number} * ${this.randomNumber} = ${correctAnswer}`;
    }
  }

  // Виведення результатів тесту на екран
  render() {
    return `
		 Тестування завершено!<br>
		 Число, яке перевіряли: ${this.number}<br>
		 Правильних відповідей: ${this.correctAnswers}<br>
		 Неправильних відповідей: ${this.wrongAnswers}
	  `;
  }
}
const userNumber = parseInt(prompt(`Введіть число з яким хочете потренуватися на прикладах: `, `7`))
const checker = new MultChecker(userNumber);

// Запитуємо кількість прикладів
const numExamples = parseInt(prompt("Скільки прикладів ви хочете зробити?"));

// Генерація та перевірка прикладів
for (let i = 0; i < numExamples; i++) {
  const example = checker.generateExample();
  const userAnswer = parseInt(prompt(example)); // повертаємо, те що вказали у return

  // Перевіряємо відповідь і виводимо результат
  const result = checker.checkAnswer(userAnswer);
  alert(result);
}

// Виводимо результати тестування
document.write(checker.render());
