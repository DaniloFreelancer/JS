"use strict";

if (confirm(`Початок тестування?`)) {
  function isDateInCurrentWeek(date) {
    // Отримуємо поточну дату
    const now = new Date();

    // (0 — неділя, 1 — понеділок, ..., 6 — субота)
    const currentDayOfWeek = now.getDay();

    // Корегуємо поточний день тижня для початку тижня (понеділок)
    const daysToMonday = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;

    // Створюємо дату для початку тижня (понеділок 00:00)
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - daysToMonday);
    startOfWeek.setHours(0, 0, 0, 0);

    // Створюємо дату для кінця тижня (неділя 23:59:59)
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    // Порівнюємо, чи дата знаходиться між початком і кінцем тижня
    return date >= startOfWeek && date <= endOfWeek;
  }
  const myDate = new Date("2024-10-19T15:00:00");
  const result = isDateInCurrentWeek(myDate);
  console.log(result); // true або false
}
