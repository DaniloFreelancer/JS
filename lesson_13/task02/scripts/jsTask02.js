function generatePermutations(arr) {
  //пустий масив з результатом
  const result = [];

  //внутрішня функція з індексом, який на початку буде 0
  function permute(index) {
    //якщо індекс буде 3, що дорівнює довжині масиву з імен, то в результат пушимо копію масиву
    if (index === arr.length) {
      result.push([...arr]);
      return;
    }

    for (let i = index; i < arr.length; i++) {
      // Міняємо місцями елементи
      let temp = arr[index];//temp = 'Danil', index = 0
      arr[index] = arr[i];//i=0
      arr[i] = temp; // temp = 'Danil'

      // Рекурсія на наступний індекс
      permute(index + 1);

      // Повертаємо елементи назад
      temp = arr[index];
      arr[index] = arr[i];
      arr[i] = temp;
    }
  }

  permute(0);
  return result;
}

const athletes = ["Danil", "Andrew", "Olga"];
const allResults = generatePermutations(athletes);
console.log(allResults);
