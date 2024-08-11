function getPositiveTemp() {
  let positiveCount = 0;
  let positiveSum = 0;
  let numberOfTemperatures = parseInt(
    prompt("Скільки температур ви хочете ввести?", "5")
  );

  for (let i = 0; i < numberOfTemperatures; i++) {
    let temp = parseFloat(prompt(`Введіть температуру №${i + 1}:`, `${i + 2}`));
    if (temp > 0) {
      positiveSum += temp;
      positiveCount++;
    }
  }

  if (positiveCount === 0) return "відсутнє";
  else return positiveSum / positiveCount; // positiveCount - відіграє роль кількості чисел, для знаходження середнього арифметичного.
}

let result = getPositiveTemp();
alert(`Середнє значення додатних показів температури: ${result}.`);
