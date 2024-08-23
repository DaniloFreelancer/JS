const prices = [100, 250, 300, 50, 150];
const items = ["Товар 1", "Товар 2", "Товар 3", "Товар 4", "Товар 5"];

// Запитуємо у користувача, скільки грошей у нього є
let userBudget = parseInt(prompt("Скільки у вас є грошей?"));

// Перевірка товарів, які користувач може собі дозволити
let affordableItems = [];

for (let i = 0; i < prices.length; i++) {
  if (prices[i] <= userBudget) {
    affordableItems.push(`${items[i]} - $${prices[i]}`);
  }
}

if (affordableItems.length > 0)
  alert(`Ви можете дозволити собі такі товари:\n${affordableItems.join("\n")}`);
else alert("На жаль, ви не можете собі дозволити жоден товар.");
