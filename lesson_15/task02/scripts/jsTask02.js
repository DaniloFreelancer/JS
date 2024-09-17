const car = {
  brand: `Porsche`,
  tankSize: 72, // Розмір бака
  numberOfLiters: 20, // Кількість наявного бензину
  numberOfSeats: 4, // Кількість місць у салоні
  numberOfPassengers: 3, // Кількість пасажирів

  // Заправка
  gasStation: function () {
    const amoutOfFuel = parseInt(
      prompt(`Скільки літрів бензину хочете залити до машини? `),
      10
    );
    if (isNaN(amoutOfFuel) || amoutOfFuel <= 0) {
      return `Будь ласка, введіть коректне число літрів!`;
    }
    const check = this.tankSize - this.numberOfLiters;
    if (amoutOfFuel > check) {
      return `У бак не влізе стільки літрів. Можете заправити максимум ${check} літрів.`;
    } else {
      this.numberOfLiters += amoutOfFuel;
      return `Ви заправили ${amoutOfFuel} літрів. Тепер у баку ${this.numberOfLiters} літрів.`;
    }
  },

  // Виведення кількості пасажирів
  toString: function () {
    return `Кількість пасажирів в салоні: ${this.numberOfPassengers}.`;
  },

  // Додавання пасажирів
  addPassengers: function () {
    const amoutOfPassengers = parseInt(
      prompt(
        `Введіть кількість пасажирів (максимум доступних місць: ${
          this.numberOfSeats - this.numberOfPassengers
        }): `
      ),
      10
    );
    const freeSeats = this.numberOfSeats - this.numberOfPassengers;
    if (isNaN(amoutOfPassengers) || amoutOfPassengers <= 0) {
      return `Будь ласка, введіть коректну кількість пасажирів!`;
    }
    if (amoutOfPassengers > freeSeats) {
      return `В машині не вистачає місця. Вільно лише ${freeSeats} місць.`;
    } else {
      this.numberOfPassengers += amoutOfPassengers;//Збільшуємо кількість в загальному, щоб нове значення збереглос 
      return `Додано ${amoutOfPassengers} пасажирів. Зараз в машині ${this.numberOfPassengers} пасажирів.`;
    }
  },

  // Висадка пасажирів
  landing: function () {
    const landPassengers = parseInt(
      prompt(`Скільки пасажирів ви хочете висадити? `),
      10
    );
    if (isNaN(landPassengers) || landPassengers <= 0) {
      return `Будь ласка, введіть коректну кількість пасажирів для висадки!`;
    }
    if (landPassengers > this.numberOfPassengers) {
      return `У машині лише ${this.numberOfPassengers} пасажирів. Не можна висадити більше, ніж є.`;
    } else {
      this.numberOfPassengers -= landPassengers;
      return `Висаджено ${landPassengers} пасажирів. Зараз в машині ${this.numberOfPassengers} пасажирів.`;
    }
  },
};

// Виклик функцій
alert(car.gasStation());
alert(car.toString());
alert(car.addPassengers());
alert(car.landing());
