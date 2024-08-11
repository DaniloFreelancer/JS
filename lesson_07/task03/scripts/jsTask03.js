let userNumber = parseInt(prompt(`Введіть число від 1 до 7`, `6`));

function daysOfSunday(userNumber) {
  switch (userNumber) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return `Це робочій день`;
    case 6:
    case 7:
      return `Це вихідний`;
    default:
      return `Введені некоректні дані, введіть число від 1 до 7`;
  }
}

alert(daysOfSunday(userNumber));
