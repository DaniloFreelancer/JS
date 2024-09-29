"use strict";

if (confirm(`Почати тестування ?`)) {
  // Масив зі списком бажань
  const wishes = [
    "Подорожувати навколо світу",
    "Купити новий автомобіль",
    "Отримати підвищення на роботі",
    "Вивчити нову мову",
    "Знайти нове хобі",
    "Придбати будинок на березі моря",
    "Навчитися грати на гітарі",
    "Відвідати всі континенти",
    "Зайнятися благодійністю",
    "Спробувати екстремальні види спорту",
  ];

  // Функція для вибору випадкових бажань
  function getRandomWishes(wishesArray, numberOfWishes) {
    const shuffledWishes = wishesArray.sort(() => 0.5 - Math.random());
    return shuffledWishes.slice(0, numberOfWishes);
  }

  // Функція для додавання бажань на сторінку
  function displayWishes() {
    const wishContainer = document.getElementById("wishContainer");
    const randomWishes = getRandomWishes(wishes, 3); // Вибрати 3 випадкових бажання

    randomWishes.forEach((wish) => {
      const wishDiv = document.createElement("div");
      wishDiv.classList.add("wish-item");
      wishDiv.innerText = wish;
      wishContainer.append(wishDiv); // Додати кожне бажання до контейнера
    });
  }

  // Виклик функції після завантаження сторінки
  window.onload = function () {
    displayWishes();
  };
}
