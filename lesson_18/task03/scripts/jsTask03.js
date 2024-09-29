"use strict";

if (confirm(`Почати тестування ?`)) {
  function userAge() {
    const birthYear = parseInt(document.getElementById("birthYear").value);
    const currentYear = new Date().getFullYear();
    try {
      if (
        birthYear > new Date().getFullYear() ||
        isNaN(birthYear) ||
        birthYear <= 0
      )
        throw new Error(`Некоректне значення!`);
      const age = currentYear - birthYear;

      document.getElementById("age").value = age;
    } catch (error) {
      alert(error.message);
    }
  }
  window.onload = function () {
    document.getElementById("calculate-age").onclick = userAge;
  };
}
