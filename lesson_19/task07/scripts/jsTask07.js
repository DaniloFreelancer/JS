"use strict";

if (confirm(`Почати тестування?`)) {
  // Створення сніжинки
  function createSnowflake() {
    //створили div
    const snowflake = document.createElement("div");
    //додали клас
    snowflake.classList.add("snowflake");
    snowflake.innerHTML = "&#10052;"; // Символ сніжинки
    //внесли в body
    document.body.append(snowflake);

    // Встановлення випадкової позиції для сніжинки
    snowflake.style.left = Math.random() * window.innerWidth + "px";

    // Випадкова швидкість руху сніжинки
    const speed = Math.random() * 5 + 2;

    // Початкова висота
    let topPosition = 0;

    // Анімація падіння
    const fallInterval = setInterval(() => {
      topPosition += speed;
      snowflake.style.top = topPosition + "px";

      // Перевірка, чи сніжинка дійшла до нижньої частини екрана
      if (topPosition > window.innerHeight) {
        topPosition = 0; // Повертаємо сніжинку нагору
        snowflake.style.left = Math.random() * window.innerWidth + "px"; // Нова випадкова позиція
      }
    }, 45);
  }

  // Генерація кількох сніжинок
  function generateSnowflakes(number) {
    for (let i = 0; i < number; i++) {
      createSnowflake();
    }
  }

  // Кількість сніжинок
  generateSnowflakes(50);
}
