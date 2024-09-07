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

  // todo Задача 1. Дано масив 30 випадкових цілих чисел.
  // todo Підрахувати скільки було обмінів та порівнянь чисел під час сортування бульбашкою
  let exchangeCountBubbleSort = 0;
  let numberOfComparesonsBubbleSort = 0;
  function bubbleSort(arr) {
    let changed;
    do {
      //на початку false
      changed = false;
      //проходимось циклом по масиву
      for (let i = 1; i < arr.length; i++) {
        numberOfComparesonsBubbleSort++;
        //питаємось чи перший елемент більше ніж і-товий елемент масиву
        if (arr[i - 1] > arr[i]) {
          //тоді змінюємо елементи місцями
          let temp = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = temp;
          //значення true
          changed = true;
          exchangeCountBubbleSort++;
        }
      }
    } while (
      //поки changed=true
      changed
    );
    return arr;
  }
  console.log(
    `Сортування бульбашкою - ${bubbleSort(
      sortArray
    )}; Кількість порівнянь - ${numberOfComparesonsBubbleSort}; Кількість обмінів - ${exchangeCountBubbleSort}.`
  );
}
