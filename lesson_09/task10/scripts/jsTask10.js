const generatePrices = (length, min, max) => {
  const prices = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    prices.push(randomNumber);
  }
  return prices;
};

let prices = generatePrices(6, 1500, 7000); // prices = prices[.. , .. ]

const newPrices = prices.map((el) => Math.ceil(el * 0.2));

alert(`Масив цін - [${prices.join(`, `)}].\nМасив сплаченого податку - [${newPrices.join(`, `)}].`)
