"use strict";

if (confirm(`Почати тестування ?`)) {
  window.onload = function () {
    document.getElementById("calculate-age").onclick = function () {
      const birthYear = parseInt(document.getElementById("birthYear").value);
		if(birthYear > 2024 || isNaN) throw new Error(`Введено некоректні дані!`)
      const currentYear = new Date().getFullYear();
      const age = currentYear - birthYear;

      document.getElementById("age").value = age;
    };
  };
}
