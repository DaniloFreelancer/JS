let output = "";

// Цикл від 1 до 23
for (let i = 1; i <= 23; i++) {
  output += i + " "; // Додаємо номер рядка (i) до результату
  //Коли нове значення i, цикл буде починатися з одиниці, бо залежить від значення зовнішнього циклу.
  // Якщо i = 3, то цикл буде виконуватися поки j не стане більше за i. 
  for (let j = 1; j <= i; j++) {
    // Внутрішній цикл для друку чисел від 1 до i
    output += j + " ";
  }
  output += "<br>"; // Переходимо на новий рядок
}
document.write(output); // Виводимо результат на екран