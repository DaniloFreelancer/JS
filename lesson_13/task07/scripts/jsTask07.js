if (confirm(`Почати тестування?`)) {
  function getRandomNumber(min = 1, max = 100) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  function askAdditionQuestion() {
    const a = getRandomNumber();
    const b = getRandomNumber();
    let sum = a + b;
    let userAnswer = parseInt(
      prompt(`Введіть відповідь до прикладу ${a} + ${b}`)
    );
    if (userAnswer === sum) alert(`Правильно! Ви великий молодець!`);
    else alert(`Неправильно! Правильна відповідь ${sum}`);
  }

  setInterval(askAdditionQuestion, 10000);
}
