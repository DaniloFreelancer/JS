"use strict";

if (confirm(`Почати тестування?`)) {
  //Дано 5 елементів input.
  //При введенні значення у якийсь із них необхідно автоматично заповнювати інші
  //(усі попередні у спадному порядку(кожен попередній має значення на 1 менше за наступний),
  //усі наступні на 1 більше (кожен наступне на 1 більше за попереднього)
  // Отримуємо всі input з класом "form__input"
  const inputs = document.querySelectorAll(".form__input");

  //Додаємо обробник подій для кожного input
  inputs.forEach((input, index) => {
    //  console.log(index);
    input.addEventListener("input", function () {
      const currentValue = parseInt(input.value); // Отримуємо поточне значення

      // Якщо значення коректне, починаємо заповнення
      if (!isNaN(currentValue)) {
        // Заповнюємо всі попередні input
        for (let i = index - 1; i >= 0; i--) {
          inputs[i].value = currentValue - (index - i);
        }

        // Заповнюємо всі наступні input
        for (let i = index + 1; i < inputs.length; i++) {
          inputs[i].value = currentValue + (i - index);
        }
      }
    });
  });
}
