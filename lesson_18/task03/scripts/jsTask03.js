"use strict";

if (confirm(`Почати тестування `)) {
  let userYear = parseInt(prompt(`Якого Ви року народження?`));
  if (userYear > 2024 || isNaN) {
    throw new Error(`Введіть коректне значення.`);
  }

  const currentYear = 2024;
  let userAge = currentYear - userYear;
  const age = (document.getElementById("age").innerText = userAge);
}
