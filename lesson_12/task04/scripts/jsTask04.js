if (confirm(`Почати тестування?`)) {
  function generatedArray(length, min, max) {
    const array = [];
    for (let i = 0; i < length; i++) {
      const randomNumber = min + Math.floor(Math.random() * (max - min + 1));
      array.push(randomNumber);
    }
    return array;
  }

  let arr = generatedArray(5, 1, 8);
  console.log(`Згенерований масив - ${arr}.`);

  console.log(`------------------Сортування бульбашкою---------------`);
  function bubbleSort(arr) {
    let changed;
    do {
      //на початку false
      changed = false;
      //проходимось циклом по масиву
      for (let i = 1; i < arr.length; i++) {
        //питаємось чи перший елемент більше ніж і-товий елемент масиву
        if (arr[i - 1] > arr[i]) {
          //тоді змінюємо елементи місцями
          let temp = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = temp;
          //значення true
          changed = true;
          console.log(arr);
        }
      }
    } while (
      //поки changed=true
      changed
    );
    return arr;
  }
  bubbleSort([...arr]);

  console.log(`------------------Сортування змішуванням---------------`);
  function mixSort(arr) {
    //початок
    let leftIndex = 0;
    //кінець
    let rightIndex = arr.length - 1;
    while (leftIndex < rightIndex) {
      let changed = false;
      //Іде перевірка зліва-направо
      for (let i = leftIndex; i < rightIndex; i++) {
        if (arr[i] > arr[i + 1]) {
          //Змінюємо місцями
          let temp = arr[i + 1];
          arr[i + 1] = arr[i];
          arr[i] = temp;
          changed = true;
			 console.log(arr)
        }
      }
      rightIndex--;
      // закічуємо цикл while якщо false
      if (!changed) break;
      changed = false;
      //Іде перевірка справа-наліво
      for (let i = rightIndex; i > leftIndex; i--) {
        if (arr[i - 1] > arr[i]) {
          let temp = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = temp;
          changed = true;
			 console.log(arr)
        }
      }
      leftIndex++;
      if (!changed) break;
    }
    return arr;
  }
  mixSort([...arr]);

  console.log(`------------------Сортування включенням----------------`);
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
      //виводимо результат переставленого елементу
      console.log(arr);
    }
    return arr;
  }
  cocktailSort([...arr]);
}
