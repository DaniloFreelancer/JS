"use strict";

if (confirm(`Почати тестування?`)) {
  // Отримуємо всі картки товарів
  const cardList = document.querySelectorAll(".card");

  // Додаємо обробник подій для кожної картки товару
  cardList.forEach((card) => {
    card.addEventListener("click", function () {
      // Використовуємо toggle для перемикання класу selected
      card.classList.toggle("selected");
    });
  });
}
