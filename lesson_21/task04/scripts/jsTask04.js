"use strict";

if (confirm(`Почати тестування?`)) {
  // Запам'ятовуємо час, коли користувач зайшов на сторінку
  const startTime = new Date();

  // Оновлюємо відображення часу
  function updateTime() {
    const currentTime = new Date(); // Поточний час
    const timeDifference = currentTime - startTime; // Різниця в мілісекундах

    const minutesOnSite = Math.floor(timeDifference / 60000); // Конвертуємо в хвилини

    // Оновлюємо текст на сторінці
    document.getElementById("timeOnSite").innerText = minutesOnSite;
  }

  // Виклик функції кожну хвилину (60 000 мілісекунд = 1 хвилина)
  setInterval(updateTime, 60000);
}
