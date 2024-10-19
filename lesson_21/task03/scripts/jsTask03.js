"use strict";

if (confirm(`Почати тестування?`)) {
  class Entity {
    constructor(x, y, imgPath, updateInterval) {
      this.x = x; // Координата X
      this.y = y; // Координата Y
      this.imgPath = imgPath; // Шлях до зображення
      this.updateInterval = updateInterval; // Інтервал оновлення
      this.element = null; // Елемент DOM для зображення
    }

    // Метод для генерації елемента розмітки
    generateElement() {
      const img = document.createElement("img");
      img.src = this.imgPath;
      img.style.position = "absolute";
      img.style.left = this.x + "px";
      img.style.top = this.y + "px";
      document.body.append(img);
      this.element = img; // Зберігаємо для подальшого використання
    }

    // Метод для оновлення розмітки
    update() {
      // Абстрактний метод — дочірні класи повинні реалізовувати свою логіку
      throw new Error(
        "Method 'update()' must be implemented in derived classes"
      );
    }

    // Запуск оновлення через інтервал
	 // Успадковується дочірніми елементами(іншими класами)
    startUpdating() {
      setInterval(() => this.update(), this.updateInterval);
    }
  }
  class House extends Entity {
    constructor(x, y, imgPath, updateInterval) {
      super(x, y, imgPath, updateInterval);
      this.scale = 1; // Початковий масштаб
    }

    // Метод оновлення масштабу (зменшення або збільшення)
    update() {
      // Збільшуємо або зменшуємо масштаб
      const scaleChange = Math.random() < 0.5 ? -0.1 : 0.1;
      this.scale += scaleChange;
      this.scale = Math.max(0.5, Math.min(2, this.scale)); // Обмежуємо масштаб

      // Застосовуємо масштаб до зображення
      this.element.style.transform = `scale(${this.scale})`;
    }
  }
  class Dog extends Entity {
    constructor(x, y, imgPath, updateInterval) {
      super(x, y, imgPath, updateInterval);
    }

    // Метод оновлення зміщення по горизонталі
    update() {
      // Випадкове зміщення по осі X
      const randomShift = (Math.random() - 0.5) * 20; // Зміщення на випадкову величину
      this.x += randomShift;

      // Оновлюємо координату X у стилях
      this.element.style.left = this.x + "px";
    }
  }
  class Bird extends Entity {
    constructor(x, y, imgPath, updateInterval) {
      super(x, y, imgPath, updateInterval);
    }

    // Метод оновлення (випадкове переміщення в довільному напрямку)
    update() {
      // Випадкове зміщення по осі X і Y
      const randomShiftX = (Math.random() - 0.5) * 20;
      const randomShiftY = (Math.random() - 0.5) * 20;

      this.x += randomShiftX;
      this.y += randomShiftY;

      // Оновлюємо координати у стилях
      this.element.style.left = this.x + "px";
      this.element.style.top = this.y + "px";
    }
  }

  // Створюємо об'єкти
  const house = new House(100, 100, "./image/house.avif", 1000);
  const dog = new Dog(200, 300, "./image/dog.png", 500);
  const bird = new Bird(400, 200, "./image/bird.png", 300);

  // Генеруємо елементи на сторінці
  house.generateElement();
  dog.generateElement();
  bird.generateElement();

  // Запускаємо оновлення кожного об'єкта
  house.startUpdating();
  dog.startUpdating();
  bird.startUpdating();
}
