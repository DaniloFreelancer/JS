const userAmout = parseInt(prompt(`Введіть кількість елементів: `, `9`));

const halfOfArray = userAmout / 2;
const array = new Array(userAmout).fill(1, 0, halfOfArray).fill(7, halfOfArray);

alert(array);
