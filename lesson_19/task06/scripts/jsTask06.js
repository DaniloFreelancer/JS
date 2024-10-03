"use strict";

if (confirm(`Почати тестування?`)) {
  document.addEventListener("DOMContentLoaded", function () {
    // Отримуємо всі стрілки для переміщення зі загального списку до списку змагань
    const arrows = document.querySelectorAll(".arrow");
    // Отримуємо всі стрілки для переміщення зі списку змагань до загального списку
    const reverseArrows = document.querySelectorAll(".arrow-reverse");

    arrows.forEach((arrow) => {
      arrow.addEventListener("click", function () {
        // Отримуємо спортсмена (елемент div) для переміщення
        //Оскільки ми клікаємо на кнопку, а перемістити маємо блок(який є батьківським для кпопки) використовуємо this.parentElement
        const listItem = this.parentElement;
        console.log(listItem);
        const selectedList = document.querySelector(".secondList__body");

        // Копіюємо елемент у список обраних для змагань
        moveItem(listItem, selectedList, "arrow-reverse", "red");
      });
    });

    reverseArrows.forEach((reverseArrow) => {
      reverseArrow.addEventListener("click", function () {
        // Отримуємо спортсмена (елемент div) для переміщення
        const listItem = this.parentElement;
        const mainList = document.querySelector(".firstList__body");

        // Копіюємо елемент у загальний список
        moveItem(listItem, mainList, "arrow", "green");
      });
    });

    //реалізація переміщення
    function moveItem(item, targetList, newButtonClass, buttonColor) {
      // Створюємо нову кнопку
      const newButton = document.createElement("button");
      newButton.classList.add(newButtonClass);
      newButton.style.borderLeftColor = buttonColor;
      // Додаємо подію для нової кнопки
      newButton.addEventListener("click", function () {
        if (newButtonClass === "arrow-reverse") {
          moveItem(
            item,
            document.querySelector(".firstList__body"),
            "arrow",
            "green"
          );
        } else {
          moveItem(
            item,
            document.querySelector(".secondList__body"),
            "arrow-reverse",
            "red"
          );
        }
      });

      // Додаємо кнопку до елемента(заміна старої кнопку на нову)
      item.querySelector("button").replaceWith(newButton);
      // Додаємо спортсмена до нового списку
      targetList.appendChild(item);
    }
  });
}
