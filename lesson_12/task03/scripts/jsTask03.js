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
  
  // todo Задача 3. Дано масив 30 випадкових цілих чисел.
  // todo Підрахувати скільки було обмінів та порівнянь чисел під час сортування включеннями.
  let exchangeCountCocktailSort = 0;
  let numberOfComparesonsCocktaileSort = 0;
  function cocktailSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      //Встановлюємо початковий елемент для перевірки
      const currentElement = arr[i];
      // вставляємо j-товий елемент у правильну позицію зліва
      let j = i - 1;
      numberOfComparesonsCocktaileSort++;
      // поки виконується умова, сортуємо
      while (j >= 0 && arr[j] > currentElement) {
        numberOfComparesonsCocktaileSort++;
        exchangeCountCocktailSort++;
        //міняємо місцями два елементи
        arr[j + 1] = arr[j];
        //змешуємо j, оскільки поставили елемент який був менше у правильну позицію
        j--;
      }
      //тепер елемент який більше, стає головним, і від нього іде далі порівняння
      arr[j + 1] = currentElement;
    }
    return arr;
  }
  console.log(
    `Сортування включенням - ${cocktailSort(
      sortArray
    )}; Кількість порівнянь - ${numberOfComparesonsCocktaileSort}; Клькість обмінів - ${exchangeCountCocktailSort}.`
  );
}
