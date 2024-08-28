// const userArray = parseInt(prompt(`Введіть кількість елементів масиву: `, `5`));
const arrays = [100, 200, 600, 2, 5, 7, 21, 100, 9000, 19, 12000];

// for (let i = 1; i <= userArray; i++) {
//   const numberInArray = parseFloat(prompt(`Введіть ${i}-е значення у масив: `));
//   arrays.push(numberInArray);
// }
document.write(`Масив елементів [${arrays}] <br>`)
for (let el of arrays) {
  if (el > 100) document.write(`Елементи більші за 100 - ${el}. <br>`);
}
