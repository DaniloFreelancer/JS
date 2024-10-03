"use strict";

if (confirm(`Почати тестування?`)) {
  //Задача 3. Дано 5 випадковим чином згенерованих нумерованих списків з рандомними числами
  //(кількість елементів у списку випадкова від 1 до 10, елементи випадкові – від 1 до 100).
  //При натисненні на кнопку нумеровані списки з парною кількістю елементів зафарбувати у зелений колір, інші у червоний.
  function getNumberOfElement(min = 1, max = 10) {
    return min + Math.floor(Math.random() * (max - min));
  }
  function createList() {
    const container = document.getElementById("list__container");
    for (let i = 1; i <= 5; i++) {
      const ulEl = document.createElement("ol");
      for (let j = 1; j <= getNumberOfElement(); j++) {
        const liEl = document.createElement("li");
        liEl.innerText = getNumberOfElement(1, 100);
        ulEl.append(liEl);
      }
      container.append(ulEl);
    }

    return container;
  }

  window.onload = createList;

  function colorizeLists() {
    const lists = document.querySelectorAll("#list__container ol");

    lists.forEach((list) => {
      if (list.children.length % 2 === 0) {
        list.classList.add("green"); // Додаємо клас green, якщо кількість елементів парна
        list.classList.remove("red");
      } else {
        list.classList.add("red"); // Додаємо клас red, якщо кількість елементів непарна
        list.classList.remove("green");
      }
    });
  }

  document
    .getElementById("colorizeButton")
    .addEventListener("click", colorizeLists);
}
