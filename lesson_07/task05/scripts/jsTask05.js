let firstNumber = parseFloat(prompt(`Перше число: `, `9`));
let secondNumber = parseFloat(prompt(`Друге число: `, `2`));
let thirdNumber = parseFloat(prompt(`Третє число: `, `12`));

function combinations(a, b, c) {
  let evenCount = 0;
  let positiveCount = 0;
  let greaterThanHundredCount = 0;

  if (a % 2 === 0) evenCount++;
  if (a > 0) positiveCount++;
  if (a > 100) greaterThanHundredCount++;

  if (b % 2 === 0) evenCount++;
  if (b > 0) positiveCount++;
  if (b > 100) greaterThanHundredCount++;

  if (c % 2 === 0) evenCount++;
  if (c > 0) positiveCount++;
  if (c > 100) greaterThanHundredCount++;

  // До самих змінних повертаємо значення, яке вдалось одержати від чисел користувача
  return {
    evenCount: evenCount,
    positiveCount: positiveCount,
    greaterThanHundredCount: greaterThanHundredCount,
  };
}

const result = combinations(firstNumber, secondNumber, thirdNumber);
alert(`Парних чисел: ${result.evenCount}`);
alert(`Додатних чисел: ${result.positiveCount}`);
alert(`Чисел більше за 100: ${result.greaterThanHundredCount}`);
