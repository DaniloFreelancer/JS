alert(`Розв'язання в консолі.`)

//Генерація двовимірного масиву
function getRandomNumber(rows, cols, min, max) {
  const table = [];

  for (let rowsIndex = 0; rowsIndex < rows; rowsIndex++) {
    table[rowsIndex] = []; // Створюємо новий масив для кожного рядка
    for (let columsIndex = 0; columsIndex < cols; columsIndex++) {
      table[rowsIndex][columsIndex] =
        min + Math.floor(Math.random() * (max - min + 1));
    }
  }
  return table;
}

const table = getRandomNumber(4, 4, 10, 20);
console.log(table);

//!------------------------------------------------------------Завдання 1
//*-----------------------------------------------1)
let sum1 = 0;
for (let rowsIndex = 0; rowsIndex <= 1; rowsIndex++) {
  for (let columsIndex = 0; columsIndex <= 1; columsIndex++) {
    sum1 += table[rowsIndex][columsIndex];
  }
}
console.log(`1) ${sum1} `);

//*-----------------------------------------------2)
let sum2 = 0;
for (let rowsIndex = 0; rowsIndex <= 1; rowsIndex++) {
  for (let columsIndex = 2; columsIndex <= 3; columsIndex++) {
    sum2 += table[rowsIndex][columsIndex];
  }
}
console.log(`2) ${sum2}`);

//*-----------------------------------------------3)
let sum3 = 0;
for (let rowsIndex = 2; rowsIndex <= 3; rowsIndex++) {
  for (let columsIndex = 0; columsIndex <= 1; columsIndex++) {
    sum3 += table[rowsIndex][columsIndex];
  }
}
console.log(`3) ${sum3}`);
//*-----------------------------------------------4)
let sum4 = 0;
for (let rowsIndex = 2; rowsIndex <= 3; rowsIndex++) {
  for (let columsIndex = 2; columsIndex <= 3; columsIndex++) {
    sum4 += table[rowsIndex][columsIndex];
  }
}
console.log(`4) ${sum4}`);

//*-----------------------------------------------5)
let evenSum = 0;
for (let rowsIndex = 0; rowsIndex < table.length; rowsIndex += 2) {
  for (
    let columsIndex = 0;
    columsIndex < table[rowsIndex].length;
    columsIndex++
  ) {
    //table[rowsIndex].length - уникнення помилок, якщо рядки мають різну довжину. Cам рядок означає довжину рядка до якого звернулися.
    //якщо rowsIndex=0, то table[rowsIndex].length - означає, що ми звернулися до рядку 0, і поверне  його довжину, в даному випадку масив з довжиною в чотири елементи
    //
    evenSum += table[rowsIndex][columsIndex];
  }
}
console.log(`5) ${evenSum}`);

//*-----------------------------------------------6)
let oddSum = 0;
for (let rowsIndex = 0; rowsIndex < table.length; rowsIndex++) {
  for (let columsIndex = 1; columsIndex < table.length; columsIndex += 2) {
    oddSum += table[rowsIndex][columsIndex];
  }
}
console.log(`6) ${oddSum}`);

//*-----------------------------------------------7)
let sumMixed = 0;
for (let rowsIndex = 0; rowsIndex < table.length; rowsIndex++) {
  for (
    let columsIndex = 0;
    columsIndex < table[rowsIndex].length;
    columsIndex++
  ) {
    if (
      (rowsIndex % 2 === 0 && columsIndex % 2 === 1) ||
      (rowsIndex % 2 === 1 && columsIndex % 2 === 0)
    )
      sumMixed += table[rowsIndex][columsIndex];
  }
}
console.log(`7) ${sumMixed}`);
