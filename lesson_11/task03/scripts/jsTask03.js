//розмір поля
const size = 6;
//загальна кількість кораблів
const totalShip = 5;
//та кількість яка буде потоплена
let shipsLeft = totalShip;
//патрони(кулі)
let ammo = 10;

if (confirm(`Почати тестування?`)) {
  //Генерація двовимірного масиву
  function battleField(size) {
    const table = [];

    for (let rowsIndex = 0; rowsIndex < size; rowsIndex++) {
      table[rowsIndex] = []; // Створюємо новий масив для кожного рядка
      for (let columsIndex = 0; columsIndex < size; columsIndex++) {
        table[rowsIndex][columsIndex] = 0;
      }
    }
    return table;
  }
  //Створили поле
  let field = battleField(size);
  console.log(field);
  //  Рандомна генерація числа
  function getRandomNumber(size) {
    return Math.floor(Math.random() * size);
  }
  //Розміщення кораблів на полі
  function placeShips(size) {
	//Кількість розміщенних кораблів
    let placedShips = 0;
	 //Розміщуємо кораблі до тих пір, поки кількість розміщених не досягне більше ніж totalShip(5)
    while (placedShips < totalShip) {
		//Рандомна позиція рядка і стовпця, де буде корабель
      const row = getRandomNumber(size);
		// !console.log(row)
      const column = getRandomNumber(size);
		// !console.log(column)
		//Перевіряємо при зверненні до масиву, якщо його рядок і стовпець рівний 0
      if (field[row][column] === 0) {
			//то значення цього рядка і стовпця заповнюється 1
        field[row][column] = 1;// тобто поставили корабель
		  //кількість розміщених кораблів збільшується на 1
        placedShips++;
      }
    }
  }

  //Прописання гри
  function playGames(size) {
    placeShips(size); // Розмістили кораблі

    //Працювати гра буде до того, поки у нас вистачає патронів, і поки, всі кораблі не буде знищеннo
    while (ammo > 0 && shipsLeft > 0) {
		//питаємо рядок і стовпець у користувача
      const row = parseInt(prompt(`Введіть рядок (0-${size - 1}):`));
      const column = parseInt(prompt(`Введіть стовпець (0-${size - 1}):`));

      //  Перевіряємо для того, чи коректно ввів користувач свої дані
      if (row >= 0 && row < size && column >= 0 && column < size) {
        if (field[row][column] === 1) {
          alert(`Влучили! Корабель потоплено.`);
          field[row][column] = -1; // Позначаємо потоплений корабель
          shipsLeft--;
        } else if (field[row][column] === 0) {
          alert(`Мимо!`);
          field[row][column] = -1; // Позначаємо, що тут уже стріляли
        } else alert(`Ви вже стріляли сюди!`);
        ammo--;
        alert(`Залишилось снарядів ${ammo}`);
      } 
		else alert(`Некоректні координати, спробуйте ще раз.`);
    }
    if (shipsLeft === 0) alert(`Вітаємо!. Ви потопили усі кораблі.`);
    else alert(`Гра закінчена. У вас закінчились снаряди.`);
  }

  playGames(size); // Запускаємо гру
}
