function getNegativeTemp() {
  let negativeCount = 0;
  let numberOfTemperatures = parseInt(
    prompt("Скільки температур ви хочете ввести?", "5")
  );

  for (let i = 0; i < numberOfTemperatures; i++) {
    let temp = parseFloat(prompt(`Введіть температуру №${i + 1}:`, `-${i+2}`));
    if (temp < 0) {
      negativeCount++;
    }
  }

  return negativeCount;
}

let result = getNegativeTemp();
alert(`Кількість від’ємних показів температури: ${result}.`);
