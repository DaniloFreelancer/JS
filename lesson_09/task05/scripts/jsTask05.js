const array = [2, -3, 4, 5, -6, 0, 7];

document.write(`Масив елементів [${array}] <br>`);
let result = 1;
for (const el of array) {
  if (el > 0) result *= el;
}
document.write(`Добуток додатніх елементів ${result}.`);
