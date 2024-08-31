alert(`Домашнє завдання у консолі`)

// Генерація
const getGeneratedNumber = (length, min, max) => {
  const array = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    array.push(randomNumber);
  }
  return array;
};

const prices = getGeneratedNumber(10, 1, 10000);
console.log(`Згенерований масив цін - ${prices}`);

//-------------------------------------------------Виконання завдань-----------------------------------------------------
//!--------------------------------------------------- Завдання 1
// *  1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
const pricesAboveThousand = prices.filter((el) => el > 1000);
console.log(`1) ${pricesAboveThousand}`);
//!--------------------------------------------------- Завдання 2
// * 2) Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
//Перевіряємо за допомогою map елементи більші за 1000, і виводимо індекс. А filter перебирає елементи,
// які виводяться після map,  і не допускає виводу в консолі -1
// const indicesGreaterThanThousand = prices
//   .map((el, index) => (el > 1000 ? index : -1))
//   .filter((index) => index !== -1);
// console.log(`2) ${indicesGreaterThanThousand}`);

// ? Оптимальний спосіб виконання
//reduce проходить по всьому масиву
//acc(accumulator) - початковий масив, який буде приймати значечння індексів тих чисел, які більша за 1000
// початкове значення accumulator - це порожній масив []
//після виконання умови, пушимо індекси елементів, які виконують умову, і ретурнимо сам масив
const indicesGreaterThanThousand = prices.reduce((acc, price, index) => {
  if (price > 1000) acc.push(index);
  return acc;
}, []);
console.log(`2) ${indicesGreaterThanThousand}`);
//!--------------------------------------------------- Завдання 3
// * 3)Сформувати список з тих цін, які більші за попереднє значення
// Перевіряємо чи індекс більше за нуль, таким чином відкидаючи перше число, якщо воно буде менше і чи ціна більше ніж число яке по індексу наступне.
const pricesGreaterThanPrevious = prices.filter(
  (price, index) => index > 0 && price > prices[index - 1]
);
console.log(`3) ${pricesGreaterThanPrevious}`);
//!--------------------------------------------------- Завдання 4
// * 4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
const maxPrice = Math.max(...prices); // Знаходимо максимальне значення(число) у масиві
const pricesInPercentage = prices.map((price) => (price / maxPrice) * 100); // Відносно цього значення знаходимо відсоток для кожного числа, тобто беремо кожне число з масиву,
//ділимо на максимальне значення(число) у масиві, і для відсотку множимо на 100.
console.log(`4) ${pricesInPercentage}`);
//!--------------------------------------------------- Завдання 5
// * 5)Підрахувати кількість змін цін
// позначаємо початкове значення, елемент, індекс
//перевіряємо, якщо індекс більше за 0 і елемент(ціна) більше за ціну в масиві по індексу, збільшуємо початкове значення
// вкінці початкове значення ставимо 0
// взагальному отримаємо ціле число, яке показує скільки разів змінювалися ціни, згідно цієї умови
const priceChanges = prices.reduce((acc, price, index) => {
  if (index > 0 && price > prices[index - 1]) acc++;
  return acc;
}, 0);
console.log(`5) ${priceChanges}`);
//!--------------------------------------------------- Завдання 6
// * 6)Визначити, чи є ціна, що менше 1000
// Перший спосіб через find знайти число менше за 	1000 та вивести
// const priceLessThenThousand = prices.find((price) => price < 1000);
// console.log(`6) ${priceLessThenThousand}`);
if (prices.some((price) => price < 1000))
  console.log(`6) Число менше ніж 1000 в поданому масиві - існує`);
else console.log(`6) Числа менше ніж 1000 в поданому масиві - не існує`);
//!--------------------------------------------------- Завдання 7
// * 7)Визначати, чи усі ціни більше за 1000
if (prices.every((price) => price > 1000))
  console.log(`7) Усі числа більші за 1000`);
else console.log(`7) Є число менше за 1000`);
//!--------------------------------------------------- Завдання 8
// * 8)Підрахувати кількість цін, що більше за 1000
// позначаємо початкове значення, елемент
//  перевіряємо, чи більша ціна за 1000, тоді збільшуємо початкове значення, в свою чергу задавши на початку значення 0
const numberOfPricesGreaterThanThousand = prices.reduce((acc, price) => {
  if (price > 1000) acc++;
  return acc;
}, 0);
console.log(`8) ${numberOfPricesGreaterThanThousand}`);
//!--------------------------------------------------- Завдання 9
// * 9)Підрахувати суму цін, що більше за 1000
const sumOfNumberGreaterThanThousand = prices.reduce((acc, price) => {
  if (price > 1000) acc += price;
  return acc;
}, 0);
console.log(`9) ${sumOfNumberGreaterThanThousand}`);
//!--------------------------------------------------- Завдання 10
// * 10)Знайти першу ціну, що більше за 1000
const priceGreatenThenThousand = prices.find((price) => price > 1000);
console.log(`10) ${priceGreatenThenThousand}`);
//!--------------------------------------------------- Завдання 11
// * 11)Знайти індекс першої ціни, що більше за 1000
const indexOfPriceGreatenThenThousand = prices.findIndex(
  (price) => price > 1000
);
console.log(`11) ${indexOfPriceGreatenThenThousand}`);
//!--------------------------------------------------- Завдання 12
// * 12)Знайти останню ціну, що більше за 1000
const lastPriceGreatenThenThousand = prices.findLast((price) => price > 1000);
console.log(`12) ${lastPriceGreatenThenThousand}`);
//!--------------------------------------------------- Завдання 13
// * 13)Знайти індекс останньої ціни, що більше за 1000
const lastIndexOfPriceGreatenThenThousand = prices.findLastIndex(
  (price) => price > 1000
);
console.log(`13) ${lastIndexOfPriceGreatenThenThousand}`);
