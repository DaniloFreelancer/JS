"use strict";

if (confirm("Почати тестування?")) {
  function getRandomNumber(min = 1, max = 100) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  // Функція для створення таблиці 3x3 з випадковими числами
  function createTable() {
    const table = document.createElement("table");
    for (let i = 0; i < 3; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < 3; j++) {
        const cell = document.createElement("td");
        cell.textContent = getRandomNumber();
        row.append(cell);
      }
      table.append(row);
    }
    return table;
  }

  // Додаємо таблиці в контейнер
  const tableContainers = document.querySelectorAll(".table-container");
  tableContainers.forEach((container) => {
    const table = createTable();
    container.querySelector(".table").replaceWith(table);
  });

  // Обробка кліків на клітинках таблиці
  function handleClickOnCell(event) {
    const table = event.target.closest("table");
    const container = table.closest(".table-container");

    // Додаємо/видаляємо червону рамку для таблиці
    tableContainers.forEach((cont) => {
      cont.querySelector("table").classList.remove("highlighted");
    });
    table.classList.add("highlighted");

    // Оновлення кількості кліків
    const title = container.querySelector(".table__title");
    let clicks = parseInt(title.dataset.clicks) + 1;
    title.dataset.clicks = clicks;
    container.querySelector(".click-count").textContent = clicks;
  }

  // Додаємо обробники подій для клітинок усіх таблиць
  tableContainers.forEach((container) => {
    container.querySelectorAll("td").forEach((cell) => {
      cell.addEventListener("click", handleClickOnCell);
    });
  });
}
