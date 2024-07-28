let itemPrice = parseInt(prompt("Введіть ціну за товар: ", "20"));
let amoutOfMoney = parseInt(prompt("Введіть кількість грошей: ", "200"));
let sur = amoutOfMoney - itemPrice;
const loteryCost = 4;

if (itemPrice > amoutOfMoney)
  alert(`Вам відмовленно у покупці, через нестачу грошей`);
else if (amoutOfMoney > itemPrice && sur >= loteryCost) 
  alert(`Дякуємо за покупку! Чи не бажаєте купити лотерею за 4 грн?`);
else 
  alert(`Дякуємо за покупку!`);

