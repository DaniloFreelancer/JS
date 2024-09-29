"use strict";

if (confirm(`Почати тестування ?`)) {
  function displayTable(columnIndex) {
    // Створення таблиці
    const table = document.createElement("table");

    // Створити рядок (tr)
    const tr = document.createElement("tr");

    for (let i = 0; i < columnIndex; i++) {
      // Створити комірку (td)
      const td = document.createElement("td");
      // Створити input і додати його в td
      const input = createInput();
      td.append(input); // Вставляємо input в td
      tr.append(td); // Вставляємо td в tr
    }

    table.append(tr); // Додаємо рядок в таблицю

    return table; // Повертаємо таблицю
  }

  function createInput() {
    const input = document.createElement("input");
    input.type = "number"; // Поле для введення числа
    input.className = "input-value"; // Додаємо клас input-value
    return input;
  }

  // Функція для обчислення середнього значення
  function calculateAverage() {
    const inputs = document.querySelectorAll(".input-value");
    let sum = 0;
    let count = 0;

    inputs.forEach((input) => {
      const value = parseFloat(input.value);
      if (!isNaN(value)) {
        sum += value;
        count++;
      }
    });

    const average = sum / count;
    return isNaN(average) ? 0 : average;
  }

  window.onload = function () {
    document.getElementById("get-table").onclick = function () {
      const formElement = document.querySelector(".form");

      // Перевірити, чи таблиця вже існує, і видалити її
      const existingTable = document.querySelector("table");
      if (existingTable) {
        formElement.removeChild(existingTable);
      }

      const columnIndex = parseInt(
        document.getElementById("priceNumber").value
      );
      formElement.append(displayTable(columnIndex));
    };
  };
}
