"use strict";

if (confirm(`Почати тестування ?`)) {
  // Константи цін
  const TRANSPORT_COSTS = {
    auto: 1000,
    bus: 500,
    plane: 2000,
  };

  const MEAL_COSTS = {
    breakfast: 200,
    lunch: 300,
    dinner: 400,
  };

  const GUIDE_COSTS = {
    guide1: 500,
    guide2: 700,
    guide3: 1000,
  };

  function calculateTotalCost() {
    let totalCost = 0;

    // Отримати всі етапи
    const stages = document.querySelectorAll(".form__item");

    stages.forEach((stage, index) => {
      // Транспорт
      const transport = stage.querySelector("select.transport").value;
      totalCost += TRANSPORT_COSTS[transport];

      // Харчування
      const meals = stage.querySelectorAll("input[type='checkbox']:checked");
      meals.forEach((meal) => {
        totalCost += MEAL_COSTS[meal.value];
      });

      // Гід
      const guide = stage.querySelector(
        `input[name="guide${index + 1}"]:checked`
      ).value;
      totalCost += GUIDE_COSTS[guide];
    });

    document.getElementById("total-cost").innerText = totalCost;
  }

  window.onload = function () {
    document.getElementById("calculate-btn").onclick = calculateTotalCost;
  };
}
