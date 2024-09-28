"use strict";

//Склад. База товарів, які зберігаються на складі: назва товару, одиниця виміру, кількість, фірма виробник
//(назва, реєстраційний номер).
//Організувати реєстрацію/відвантаження товарів, фільтрація за назвою товару, фільтрація за назвою фірми

if (confirm(`Почати тестування?`)) {
  // Клас для моделювання виробника товару
  class Manufacturer {
    constructor(name, registrationNumber) {
      this.name = name;
      this.registrationNumber = registrationNumber;
    }

    toString() {
      return `Фірма: ${this.name}, Реєстраційний номер: ${this.registrationNumber}`;
    }
  }

  class Product {
    constructor(name, unit, quantity, manufacturer) {
      this.name = name;
      this.unit = unit;
      this.quantity = quantity;
      this.manufacturer = manufacturer;
    }

    //Метод відвантаження товару
    withDraw(quantity) {
      //Якщо кількість перевищує ту, яка є у нас на складі
      if (quantity > this.quantity)
        throw new Error(`Недостатньо товару "${this.name}" на складі!`);
      this.quantity -= quantity;
    }

    // Метод для додавання товару на склад
    add(quantity) {
      this.quantity += quantity;
    }

    toString() {
      return `Товар: ${this.name}, Одиниця: ${this.unit}, Кількість: ${this.quantity}, ${this.manufacturer}`;
    }
  }

  class Warehouse {
    constructor() {
      this.products = []; // Масив для зберігання товарів
    }

    // Метод для реєстрації нового товару
    registerProduct(name, unit, quantity, manufacturer) {
      const product = new Product(name, unit, quantity, manufacturer);
      this.products.push(product);
      console.log(`Товар "${name}" успішно зареєстровано на складі.`);
    }
    // Метод для відвантаження товару
    withdrawProduct(name, quantity) {
      const product = this.products.find((product) => product.name === name);
      if (!product) {
        throw new Error(`Товар "${name}" не знайдено на складі!`);
      }
      product.withdraw(quantity);
      console.log(`Відвантажено ${quantity} ${product.unit} товару "${name}".`);
    }
    // Фільтрація товарів за назвою
    filterByName(name) {
		//Шукаємо товар з таким ім'ям
      return this.products.filter((product) => product.name.includes(name));
    }

    // Фільтрація товарів за назвою фірми-виробника
    filterByManufacturer(manufacturerName) {
      return this.products.filter((product) =>
        product.manufacturer.name.includes(manufacturerName)
      );
    }
    // Показати всі товари
    displayAllProducts() {
      this.products.forEach((product) => console.log(product.toString()));
    }
  }

  const warehouse = new Warehouse();

  const manufacturer1 = new Manufacturer("Nike", "123456");
  const manufacturer2 = new Manufacturer("Adidas", "789012");

  warehouse.registerProduct("Кросівки", "пари", 100, manufacturer1);
  warehouse.registerProduct("Футболка", "шт.", 200, manufacturer2);
  warehouse.registerProduct("Куртка", "шт.", 50, manufacturer1);

  // Вивести всі товари
  console.log("Усі товари на складі:");
  warehouse.displayAllProducts();

  // Відвантажити товар
  try {
    warehouse.withdrawProduct("Кросівки", 10);
  } catch (error) {
    console.log(error.message);
  }

  // Фільтрація товарів за назвою
  console.log("\nФільтрація за назвою 'Кросівки':");
  warehouse
    .filterByName("Кросівки")
    .forEach((product) => console.log(product.toString()));

  // Фільтрація товарів за фірмою-виробником
  console.log("\nФільтрація за фірмою 'Nike':");
  warehouse
    .filterByManufacturer("Nike")
    .forEach((product) => console.log(product.toString()));
}
