if (confirm(`Почати тестування?`)) {
  function generatedArray(length, min, max) {
    const array = [];
    for (let i = 0; i < length; i++) {
      const randomNumber = min + Math.floor(Math.random() * (max - min + 1));
      array.push(randomNumber);
    }
    return array;
  }

  const sortArray = generatedArray(31, 1, 53);
  console.log(`Згенерований масив - ${sortArray}`);

  // todo Задача 2. Дано масив 30 випадкових цілих чисел.
  // todo Підрахувати скільки було обмінів та порівнянь чисел під час сортування змішуванням.
  let exchangeCountMixSort = 0; //Обмін
  let numberOfComparesonsMixSort = 0; // Порівняння
  function mixSort(arr) {
    //початок
    let leftIndex = 0;
    //кінець
    let rightIndex = arr.length - 1;
    while (leftIndex < rightIndex) {
      let changed = false;
      //Іде перевірка зліва-направо
      for (let i = leftIndex; i < rightIndex; i++) {
        numberOfComparesonsMixSort++;
        if (arr[i] > arr[i + 1]) {
          //Змінюємо місцями
          let temp = arr[i + 1];
          arr[i + 1] = arr[i];
          arr[i] = temp;
          changed = true;
          exchangeCountMixSort++;
        }
      }
      rightIndex--;
      // закічуємо цикл while
      if (!changed) break;
      changed = false;
      //Іде перевірка справа-наліво
      for (let i = rightIndex; i > leftIndex; i--) {
        numberOfComparesonsMixSort++;
        if (arr[i - 1] > arr[i]) {
          let temp = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = temp;
          changed = true;
          exchangeCountMixSort++;
        }
      }
      leftIndex++;
      if (!changed) break;
    }
    return arr;
  }
  console.log(
    `Сортування змішуванням - ${mixSort(
      sortArray
    )}; Кількість порівнянь - ${numberOfComparesonsMixSort}; Кількість обмінів - ${exchangeCountMixSort}.`
  );
}
