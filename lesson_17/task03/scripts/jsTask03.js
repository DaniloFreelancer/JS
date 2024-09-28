"use strict";

class Reminder {
  static instance = null; // Статична змінна для збереження єдиного екземпляра класу

  constructor(message, intervalSeconds) {
    if (Reminder.instance) {
      return Reminder.instance; // Якщо вже є екземпляр, повертаємо його
    }

    this.message = message;
    this.intervalSeconds = intervalSeconds;
    this.count = 0; // Лічильник нагадувань
    this.timer = null; // Таймер для setInterval

    Reminder.instance = this;
  }

  // Метод запуску таймера для виведення нагадувань
  startReminder() {
    if (this.timer) {
      alert("Нагадувач вже запущений!");
      return; // Не запускаємо новий інтервал, якщо таймер вже активний
    }

    // Стартуємо інтервал
    this.timer = setInterval(() => {
      this.count += 1;
      alert(`${this.message} (нагадування №${this.count})`);
    }, this.intervalSeconds * 1000); // Переводимо секунди в мілісекунди
  }

  // Метод зупинки таймера
  stopReminder() {
    if (this.timer) {
      clearInterval(this.timer); // Зупиняємо таймер
      this.timer = null; // Скидаємо значення таймера
      this.count = 0; // Скидаємо лічильник
      alert("Нагадувач зупинено!");
    } else {
      alert("Нагадувач не запущений.");
    }
  }

  // Метод зміни повідомлення без зупинки таймера
  updateMessage(newMessage) {
    this.message = newMessage;
    alert(`Повідомлення змінено на: "${this.message}"`);
  }
}

// Створюємо новий екземпляр класу Reminder
const reminder = new Reminder("Час пити воду!", 5); // 5 секунд

// Запускаємо нагадувач
reminder.startReminder();

// Через деякий час змінюємо повідомлення
setTimeout(() => {
  reminder.updateMessage("Не забудь зробити перерву!");
}, 15000); // через 15 секунд

// Через 30 секунд зупиняємо нагадувач
setTimeout(() => {
  reminder.stopReminder();
}, 30000); // через 30 секунд

// Якщо спробуємо створити ще один об'єкт-нагадувач, він поверне той же об'єкт
const reminder2 = new Reminder("Інше повідомлення", 2);
console.log(reminder === reminder2); // true, тому що це той самий екземпляр
