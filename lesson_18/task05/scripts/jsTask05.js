"use strict";

if (confirm(`Почати тестування ?`)) {
  function displayTable(rowIndex = 3, columnIndex = 4) {
    //створення таблиці
    const table = document.createElement("table");
    for (let i = 0; i < rowIndex; i++) {
      //створити  tr
      const tr = document.createElement("tr");
      for (let j = 0; j < columnIndex; j++) {
        //створити td
        const td = document.createElement("td");
        //наповнити вмістом (випадкове число)
        td.innerText = 1 + Math.floor(Math.random() * 10);
        //вставити у tr
        tr.append(td);
      }
      //вставити у table
      table.append(tr);
    }

    return table;
  }

  window.onload = function () {
    document.querySelector(".tableContainer").append(displayTable());
  };
}
