"use strict";

if (confirm(`Почати тестування?`)) {
  document.getElementById("search").addEventListener("input", function () {
    // Отримуємо введений текст
    const query = this.value.toLowerCase();

    // Отримуємо всі елементи списку працівників
    const employees = document.querySelectorAll("#employeeList li");

    // Фільтруємо елементи, які відповідають пошуковому запиту
    employees.forEach(function (employee) {
      const employeeName = employee.textContent.toLowerCase();

      // Перевіряємо, чи містить ім'я працівника фрагмент пошуку
      if (employeeName.includes(query)) {
        employee.classList.remove("hidden");
      } else {
        employee.classList.add("hidden");
      }
    });
  });
}
