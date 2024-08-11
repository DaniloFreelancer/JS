const userMonthNumber = parseInt(prompt(`Введіть номер місяця: `, `1`));

function monthNumber(userMonthNumber) {
  if (userMonthNumber >= 1 && userMonthNumber <= 12) {
    if (userMonthNumber <= 2 || userMonthNumber === 12)
      return `Пора року - Зима`;
    else if (userMonthNumber <= 5)
      return `Пора року - Весна`;
    else if (userMonthNumber <= 8)
      return `Пора року - Літо`;
    else if (userMonthNumber <= 11)
      return `Пора року - Осінь`;
  } 
  else return `Не правильно вказано номер місяця.`;
}

alert(monthNumber(userMonthNumber));
