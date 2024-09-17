let userShootPosition;

do {
  userShootPosition = parseInt(prompt(`Введіть місце пострілу від 0 до 7: `));

  // Перевірка чи введене значення коректне
  if (
    isNaN(userShootPosition) ||
    userShootPosition < 0 ||
    userShootPosition > 7
  ) {
    alert("Ви ввели некоректне значення. Введіть число від 0 до 7.");
  }
} while (
  isNaN(userShootPosition) ||
  userShootPosition < 0 ||
  userShootPosition > 7
);

const shootingGallery = {
  field: [0, 1, 1, 0, 1, 0, 0, 1],
  shoot: function () {
    if (this.field[userShootPosition] === 1) {
      //Видалили зайця
      this.field[userShootPosition] === 0;
      return `Влучили у зайця`;
    } else return `Не влучили`;
  },
  toString: function () {
    return this.field.join(", ");
  },
};

alert(shootingGallery.shoot());
alert(`Поле після обстрілу: ${shootingGallery.toString()}`);
