const userAmout = parseInt(prompt(`Введіть кількість елементів: `, `10`));

const array = new Array(userAmout).fill(7).fill(1, 0, Math.min(5, userAmout));
// Math.min () використовується, щоб уникнути помилки, якщо кількість елементів у масиві менше 5.

alert(array);

// ! Приклад з циклом
// const array = [];

// for (let i = 0; i < userAmout; i++) {
//   if (i < 5) array[i] = 1;
//   else array[i] = 7;
// }

// alert(array);
