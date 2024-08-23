let visitors = [];

// let visitors = [15, 30, 12, 25, 18, 40, 10];

const daysOfWeek = [
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П’ятниця",
  "Субота",
  "Неділя",
];

for (let i = 0; i < daysOfWeek.length; i++) {
  const userAmoutOfVisitors = parseInt(
    prompt(`Введіть кількість відвідувачів у ${daysOfWeek[i]}`, `100`)
  );
  visitors.push(userAmoutOfVisitors);
}

// --------------------1----------------------------------------------
let daysWithLessThanTwenty = [];

for (let i = 0; i < visitors.length; i++) {
  if (visitors[i] > 20) daysWithLessThanTwenty.push(daysOfWeek[i]);
}

document.write(
  "Дні з кількістю відвідувачів меншою за 20: ",
  daysWithLessThanTwenty.join(", ")
);

document.write(`<br>`);

// --------------------- 2-----------------------------------------
let minVisitors = Math.min(...visitors);
let daysWithLessVisitors = [];

for (let i = 0; i < visitors.length; i++) {
  if (visitors[i] === minVisitors) daysWithLessVisitors.push(daysOfWeek[i]);
}

document.write(
  "Дні з мінімальною кількістю відвідувачів: ",
  daysWithLessVisitors.join(", ")
);

document.write(`<br>`);

//-------------------------------3-----------------------------------
let maxVisitors = Math.max(...visitors);
let daysWithMaxVisitors = [];

for (let i = 0; i < visitors.length; i++) {
  if (visitors[i] === minVisitors) daysWithMaxVisitors.push(daysOfWeek[i]);
}

document.write(
  "Дні з максимальною кількістю відвідувачів: ",
  daysWithMaxVisitors.join(", ")
);

document.write(`<br>`);
//-------------------------4-------------------------------------

let totalWeekdayVisitors = 0;
let totalWeekendVisitors = 0;

for (let i = 0; i < visitors.length; i++) {
  if (i < 5)
    // Понеділок - П'ятниця
    totalWeekdayVisitors += visitors[i];
  // Субота - Неділя
  else totalWeekendVisitors += visitors[i];
}

document.write(
  "Загальна кількість клієнтів у робочі дні: ",
  totalWeekdayVisitors
);

document.write(`<br>`);
document.write(
  "Загальна кількість клієнтів у вихідні дні: ",
  totalWeekendVisitors
);
