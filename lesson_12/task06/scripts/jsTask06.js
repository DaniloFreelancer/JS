if (confirm(`Почати тестування?`)) {
  let names = [`Igor`, `Andrew`, `Olga`, `Mathew`, `Danil`, `Alex`];
  console.log(`Масив імен - ${names}.`);
  function cocktailSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      //Встановлюємо початковий елемент для перевірки
      const currentElement = arr[i];
      // вставляємо j-товий елемент у правильну позицію зліва
      let j = i - 1;
      // поки виконується умова, сортуємо
      while (j >= 0 && arr[j] > currentElement) {
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
  console.log(`Відсортований масив імен - ${cocktailSort(names)}.`);
  function binarySearch(arr, searchLenght, start, end) {
    if (start <= end) {
      const middle = Math.floor((start + end) / 2); //індекс елементу, так званої коробки, де знаходиться елемент
		//Перевіряємо чи довжина елемента з індексом middle дорівнює шуканій довжині
      if (arr[middle].length === searchLenght)
        return `Шуканий елемент має індекс ` + middle + `.`;
      if (arr[middle].length < searchLenght)
        binarySearch(arr, searchLenght, middle + 1, end);
      if (arr[middle].length > searchLenght)
        binarySearch(arr, searchLenght, start, middle - 1);
    } else
      return -1;
  }
  console.log(binarySearch(names, 5, 0, 5));
}
