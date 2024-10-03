"use strict";

if (confirm(`Почати тестування?`)) {
  function toColorElemets() {
    const clickedEL = this;
    let div = clickedEL;
    while (div.nextElementSibling) {
      div = div.nextElementSibling;
      div.style.color = "red";
    }
  }

  const divList = document.querySelectorAll("div");
  for (const div of divList) {
    div.onclick = toColorElemets;
  }

  // Отримуємо всі div
  //   const helloDivs = document.querySelectorAll("div");

  // Додаємо обробник подій для кожного div
  //   helloDivs.forEach((div, index) => {
  //     div.addEventListener("click", function () {
  // Проходимо через всі наступні div і фарбуємо їх у червоний колір
  //       for (let i = index + 1; i < helloDivs.length; i++) {
  //         helloDivs[i].style.color = "red";
  //       }
  //     });
  //   });
}
