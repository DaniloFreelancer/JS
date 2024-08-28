const generateCarNumber = (length) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const carNumbers = [];

  for (let i = 0; i < length; i++) {
    // Формуємо номер машини з двох літер на початку та вкінці, та 4 цифр по середині
    const randomCarNumber =
      letters.charAt(Math.floor(Math.random() * letters.length)) +
      letters.charAt(Math.floor(Math.random() * letters.length)) +
      numbers.charAt(Math.floor(Math.random() * numbers.length)) +
      numbers.charAt(Math.floor(Math.random() * numbers.length)) +
      numbers.charAt(Math.floor(Math.random() * numbers.length)) +
      numbers.charAt(Math.floor(Math.random() * numbers.length)) +
      letters.charAt(Math.floor(Math.random() * letters.length)) +
      letters.charAt(Math.floor(Math.random() * letters.length));

    carNumbers.push(randomCarNumber);
  }

  return carNumbers;
};

// Довільна кількість номерів
const carNumbers = generateCarNumber(10); // Виводимо масив з 10-ти значень, а отже і нова константа буде масивом

const filteredCarNumbers = [];

document.write(`Номер машини - [${carNumbers.join(", ")}]`);

for (let i = 0; i < carNumbers.length; i++) {
  if (carNumbers[i].charAt(0) === "A")
    // якщо початковий елемент має на початку А, ставимо на перед
    filteredCarNumbers.push(carNumbers[i]);
}

alert(`Масив номерів, які починаються на A - ${filteredCarNumbers}`);
