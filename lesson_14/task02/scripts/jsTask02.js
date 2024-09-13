alert(`Розв'язання в консолі.`)

const obj = {
  day: 30,
  month: 7,
  year: 2024,
};

function getMonthInN({ month }, N) {
  return (Math.floor(month - 1 + N) % 12) + 1;
}

const userNumberN = parseInt(prompt(`Введіть кількість місяців: `, `15`));
console.log(getMonthInN(obj, userNumberN));
