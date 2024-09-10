//Створення ітератора
function createLetterIterator(word) {
  let index = 0;

  function iteration() {
    if (index < word.length) {
      return word[index++];
    } else {
      return null; // Коли всі букви вже виведені
    }
  }

  return iteration;
}

//логіка гри
function translatorGame(description, word, translation) {
  const letterIterator = createLetterIterator(word);
  //кількість вгаданих літер
  let guessedLetters = 0;

  console.log(`Опис слова: ${description}`);

  for (let i = 0; i < word.length; i++) {
    const currentLetter = letterIterator();//отримуємо літеру
    const userLetter = prompt(`Введіть переклад букви '${currentLetter}': `);

    if (userLetter === translation[i]) {
      guessedLetters++;
    }
  }

  console.log(`Кількість вгаданих букв: ${guessedLetters} з ${word.length}`);
}

const word = "Finger";
const translation = `Палець`;
const description = "Рука англійською мовою";

translatorGame(description, word, translation);
