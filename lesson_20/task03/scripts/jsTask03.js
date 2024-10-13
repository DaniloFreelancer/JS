"use strict";

if (confirm(`Почати тестування?`)) {
  // Дані про автомобілі
  const cars = [
    { brand: "Toyota", year: 2018, price: 15000 },
    { brand: "Honda", year: 2019, price: 17000 },
    { brand: "Ford", year: 2020, price: 20000 },
    { brand: "BMW", year: 2021, price: 25000 },
    { brand: "Mercedes", year: 2022, price: 30000 },
    { brand: "Audi", year: 2019, price: 28000 },
  ];

  // Ініціалізація випадаючих списків
  const brandFilter = document.getElementById("brandFilter");
  const yearFilter = document.getElementById("yearFilter");
  const priceFilter = document.getElementById("priceFilter");
  const carList = document.getElementById("carList");

  // Функція для заповнення випадаючих списків
  function populateFilters() {
    // Унікальні значення марок(усі значення новоствореного масиву будуть унікальні)
    const uniqueBrands = [...new Set(cars.map((car) => car.brand))];
    uniqueBrands.forEach((brand) => {
      const option = document.createElement("option");
      option.value = brand;
      option.textContent = brand;
      brandFilter.append(option);
    });

    // Унікальні значення років
    const uniqueYears = [...new Set(cars.map((car) => car.year))];
    uniqueYears.forEach((year) => {
      const option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      yearFilter.append(option);
    });

    // Унікальні значення цін
    const uniquePrices = [...new Set(cars.map((car) => car.price))];
    uniquePrices.forEach((price) => {
      const option = document.createElement("option");
      option.value = price;
      option.textContent = price + " USD";
      priceFilter.append(option);
    });
  }

  // Функція для відображення відфільтрованих автомобілів
  function displayCars(filteredCars) {
    carList.innerHTML = ""; // Очищаємо список автомобілів

    filteredCars.forEach((car) => {
      const li = document.createElement("li");
      li.textContent = `${car.brand}, ${car.year}, $${car.price}`;
      carList.append(li);
    });
  }

  // Функція для фільтрування автомобілів
  function filterCars() {
    const selectedBrand = brandFilter.value;
    const selectedYear = yearFilter.value;
    const selectedPrice = priceFilter.value;

    // Фільтрація автомобілів за умовами
    const filteredCars = cars.filter((car) => {
      const brandMatch = !selectedBrand || car.brand === selectedBrand;
      const yearMatch = !selectedYear || car.year.toString() === selectedYear;
      const priceMatch =
        !selectedPrice || car.price.toString() === selectedPrice;
      return brandMatch && yearMatch && priceMatch;
    });

    displayCars(filteredCars);
  }

  // Заповнюємо випадаючі списки
  populateFilters();

  // Відображаємо всі автомобілі при завантаженні сторінки
  displayCars(cars);

  // Додаємо події зміни на випадаючі списки
  brandFilter.addEventListener("change", filterCars);
  yearFilter.addEventListener("change", filterCars);
  priceFilter.addEventListener("change", filterCars);
}
