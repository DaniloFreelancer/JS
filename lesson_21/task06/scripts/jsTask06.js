"use strict";

if (confirm(`Почати тестування?`)) {
  function updateTimeRemaining() {
    const now = new Date(); // Поточний час

    // Встановлюємо час кінця робочого дня (сьогодні о 17:00)
    const endOfWorkDay = new Date();
    endOfWorkDay.setHours(17, 0, 0, 0); // Встановлюємо 17:00:00.000 сьогодні

    // Вираховуємо різницю між 17:00 і поточним часом у мілісекундах
    const timeDifference = endOfWorkDay - now; // Отримаємо результат у мілісекундах

    // Якщо робочий день вже завершився
    if (timeDifference <= 0) {
      document.getElementById("timeRemaining").innerText =
        "Робочий день закінчився!";
      return;
    }

    // Перетворюємо різницю у години, хвилини та секунди
    const hoursRemaining = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutesRemaining = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Виводимо результат
    document.getElementById(
      "timeRemaining"
    ).innerText = `${hoursRemaining} год. ${minutesRemaining} хв. ${secondsRemaining} сек.`;
  }

  // Оновлюємо час залишку до кінця робочого дня кожну секунду
  setInterval(updateTimeRemaining, 1000);
}
