const winnings = [];
const arraySize = 10;

for (let i = 0; i < arraySize; i++) {
  winnings[i] = Math.floor(Math.random() * 1001) - 500;
}

let totalWinnings = 0;
let continuePlaying = true;

while (continuePlaying) {
  let chosenIndex = parseInt(
    prompt(
      `Ось масив виграшів: [${winnings.join(
        ", "
      )}]\nВведіть номер елемента від 0 до ${
        arraySize - 1
      }, або -1 щоб завершити гру:`
    )
  );

  if (chosenIndex === -1) {
    continuePlaying = false;
  } 
  else if (chosenIndex >= 0 && chosenIndex < arraySize) {
    // Додаємо значення обраного елемента до загальної суми виграшу
    totalWinnings += winnings[chosenIndex];
    alert(
      `Ваш виграш з цього елемента: ${winnings[chosenIndex]}\nЗагальна сума виграшу: ${totalWinnings}`
    );
  } 
  else {
    alert("Неправильний номер елемента. Спробуйте знову.");
  }
}

// Після завершення гри виводимо підсумковий виграш
alert(`Гра завершена. Ваш підсумковий виграш: ${totalWinnings} грн.`);
