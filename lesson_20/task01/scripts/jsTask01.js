"use strict";

if (confirm(`Почати тестування?`)) {
  // Байрактар. З верхньої частини екрану у випадковій позиції по горизонталі з’являються танки, які їдуть вниз.
  // При кліку на танк він вибухає і зникає з екрану.

  class Game {
    constructor(amoutOfTank) {
      this.countOfDestroyedTanks = 0; // Лічильник знищених танків
      this.amoutOfTank = amoutOfTank;
      this.updateAmoutOfTank(); // Оновлюємо лічильник на екрані
    }

    incrementDestroyedTanks() {
      this.countOfDestroyedTanks++;
      document.querySelector("#amoutOfDestroyedTank").innerText =
        this.countOfDestroyedTanks; // Оновлюємо лічильник знищених танків на екрані
    }

    decrementDestroyedTanks() {
      this.amoutOfTank--;
      this.updateAmoutOfTank(); // Оновлюємо кількість танків на екрані після зменшення
    }

    updateAmoutOfTank() {
      document.querySelector("#amoutOfTank").innerText = this.amoutOfTank;
    }
  }

  class Tank {
    // Зображення, максимальна швидкість, додавання класів
    constructor(imageObj, maxSpeed, cssObj, game) {
      this.imageObj = imageObj;
      this.maxSpeed = maxSpeed;
      this.cssObj = cssObj;
      this.game = game; // Посилання на гру, щоб викликати збільшення лічильника
    }

    // коли натиснуто зупиняємо рух танку, і змінюємо зображення на знищенний
    onClick() {
      clearInterval(this.intervalId);
      this.img.setAttribute("src", this.imageObj.destroyed);
      this.game.incrementDestroyedTanks(); // Оновлюємо лічильник знищених танків
      this.game.decrementDestroyedTanks(); // Зменшуємо кількість танків
    }

    // логіка гри
    render(containerSelector) {
      // Створюємо зображення
      const imgEl = document.createElement("img");
      // Вказуємо посилання на зображення танку
      imgEl.setAttribute("src", this.imageObj.alive);
      // Вказуємо клас, який ми створили в HTML
      imgEl.className = this.cssObj.containerClass;
      this.img = imgEl;
      // При кліку викликаємо метод знищення
      this.img.onclick = this.onClick.bind(this);
      // Додаємо в контейнер зображення
      document.querySelector(containerSelector).append(this.img);

      // Створюємо одиничний інтервал, який створить танки у випадковій позиції
      this.interval = setTimeout(() => {
        imgEl.style.left = 0.5 + Math.random() * window.innerWidth + "px";
      }, 200);

      const tankWidth = 120; // ширина танка
      const screenWidth = window.innerWidth;
      const tankHeight = 100; // висота танка

      // Початкова позиція (вище екрана)
      let topPosition = -tankHeight; // танки з'являються поза екраном зверху

      // Опускаємо до низу, тобто робимо рух вниз
      this.intervalId = setInterval(() => {
        topPosition += this.maxSpeed;
        this.img.style.transform = `translateY(${topPosition}px)`;
        if (topPosition > window.innerHeight) {
          topPosition = -tankHeight; // повертаємо танк наверх, за екран
          imgEl.style.left = Math.random() * (screenWidth - tankWidth) + "px"; // нова випадкова позиція
        }
      }, 16); // 16ms для плавного руху
    }
  }

  const imageObj = {
    alive: "./img/tank.jpg",
    destroyed: "./img/destroyedTank.png",
  };

  const amoutOfTank = parseInt(
    prompt(`Яку кількість танків додати на поле: `, "10")
  );
  const game = new Game(amoutOfTank); // Створюємо гру, де буде лічильник знищених танків

  // Створюємо кілька танків
  for (let i = 1; i < amoutOfTank; i++) {
    const t1 = new Tank(
      imageObj,
      Math.random() * 2 + 0.5,
      {
        containerClass: "tank",
      },
      game
    ); // Передаємо об'єкт гри до кожного танка
    t1.render("body");
  }

  // Встановлюємо початкове значення лічильника знищених танків
  document.querySelector("#amoutOfDestroyedTank").innerText = 0;
}
