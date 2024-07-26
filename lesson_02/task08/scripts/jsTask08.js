let maxMonth = 12;

// Math.floor() округлює вниз до найближчого цілого числа
// Math.random() * 12 генерує випадкове число від 0 до 11.999...
// Додаємо 1, щоб отримати число від 1 до 12
let randomMonth = Math.floor(Math.random() * maxMonth + 1);
let randomMonthLog = document.getElementById("randomMonth");
randomMonthLog.textContent = randomMonth;

//

// Math.floor() округлює вниз до найближчого цілого числа
// Math.random() * 7 генерує випадкове число від 0 до 6.999...
let maxDay = 7;
let randomDay = Math.floor(Math.random() * maxDay);
let randomDayLog = document.getElementById("randomDay");
randomDayLog.textContent = randomDay;

//

let sumResult = randomMonth + randomDay;
let sumResultLog = document.getElementById("sum");
sumResultLog.textContent = sumResult;
