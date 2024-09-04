alert(`Розв'язання в консолі`)

const numberOfRows = 3; // кількість магазинів

const numberOfColums = 8; // дні заробітку у них

function getRandomNumberInArray(rows, colums, min, max) {
  const table = [];
  for (let rowsIndex = 0; rowsIndex < rows; rowsIndex++) {
    table[rowsIndex] = [];
    for (let columsIndex = 0; columsIndex < colums; columsIndex++) {
      table[rowsIndex][columsIndex] =
        min + Math.floor(Math.random() * (max - min + 1));
    }
  }
  return table;
}

const profits = getRandomNumberInArray(numberOfRows, numberOfColums, 150, 5000);
console.log(profits);

//!------------------------------------------------------------Завдання 2
//*--------------------------------------------------------1)
//Перебираємо кожен елемент окремо, після того як виконали дію над першим масивом, ретурнимо його значення
const weeklyProfits = profits.map((storeProfits) =>
  storeProfits.reduce((total, profit) => total + profit, 0)
);
console.log(`1) ${weeklyProfits}`);

//*--------------------------------------------------------2)
//оскільки потрібно за кожен день, починаємо від 0, 0-вий стовпець, day-в даному випадку іде як index, який буде збільшуватися
const dailyProfits = profits[0].map((_, day) =>
  profits.reduce((total, storeProfits) => total + storeProfits[day], 0)
);
console.log(`2) ${dailyProfits}`);

//*--------------------------------------------------------3)
let profitForWorkingDays = 0;
for (let rowsIndex = 0; rowsIndex < profits.length; rowsIndex++) {
  for (let columsIndex = 0; columsIndex < 6; columsIndex++) {
    profitForWorkingDays += profits[rowsIndex][columsIndex];
  }
}
console.log(`3) ${profitForWorkingDays}`);

//*--------------------------------------------------------4)
let weekendProfit = 0;
for (let rowsIndex = 0; rowsIndex < profits.length; rowsIndex++) {
  for (let columsIndex = 6; columsIndex < 8; columsIndex++) {
    weekendProfit += profits[rowsIndex][columsIndex];
  }
}
console.log(`4) ${weekendProfit}`);

//*--------------------------------------------------------5)
const wednesdayProfit = Math.max(
  ...profits.map((storeProfits) => storeProfits[2])
);
console.log(`5) ${wednesdayProfit}`);

//*--------------------------------------------------------6)
//зменуємо вимірність через flat, і проходимось по масиву через filter
const numbersGreaterThanTwoHundred = profits
  .flat(Infinity)
  .filter((storeProfits) => storeProfits > 200);
console.log(`6) ${numbersGreaterThanTwoHundred}`);

//*--------------------------------------------------------7)
// Якщо a>0, b<0 -> return 1
// Якщо a<0, b>0 -> return -1
// Якщо a=0, b=0 -> return 0
// Створюємо новий масив, перевіряємо усі елементи масиву(зручно скопіювати) і відсортувати
const sortedWeeklyProfits = profits.map((storeProfits) =>
  [...storeProfits].sort((a, b) => a - b)
);
console.log(`7) ${sortedWeeklyProfits}`);

//*--------------------------------------------------------8)
// Беремо увесь масив, сортуємо його максимальні значення і знаходимо різницю
const sortedByMaxProfit = [...profits].sort(
  (a, b) => Math.max(...b) - Math.max(...a)
);

console.log(`8) ${sortedByMaxProfit}`);
//*--------------------------------------------------------9)
//Оскільки нам потрібно суми елементів за спаданням, то розуміємо що маємо виконати b-a, щоб отримати  -1
//Перебираємо елементи і шукаємо суму для кожного окремо
const sortedByTotalProfit = [...profits].sort(
  (a, b) =>
    b.reduce((sum, profit) => sum + profit, 0) -
    a.reduce((sum, profit) => sum + profit, 0)
);

console.log(`9) ${sortedByTotalProfit}`);
