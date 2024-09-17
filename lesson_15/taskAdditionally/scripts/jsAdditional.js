const obj1 = {
  numbers: [1, 2, 3, 4, 5, 6],
  sum: function () {
    return this.numbers.reduce((acc, elements) => acc + elements, 0);
  },
};

const obj2 = {
  numbers: [1, 2, 3, 4, 5, 6],
  productInRange: function (min, max) {
    //  return this.numbers
    //    .filter((num) => num >= min && num <= max)
    //    .reduce((acc, num) => acc * num, 1);
    let product = 1;
    for (let i = min; i <= max; i++) {
      product *= this.numbers[i];
    }
    return product;
  },
};

// Використання методу sum з obj1 для obj2
console.log("Використання sum з obj1 для obj2:");
console.log(obj1.sum.call(obj2)); // Викликаємо метод sum для obj2

// Використання методу productInRange з obj2 для obj1
console.log("Використання productInRange з obj2 для obj1:");
console.log(obj2.productInRange.call(obj1, 2, 5)); // Викликаємо метод productInRange для obj1

// Те ж саме з apply (використовується масив аргументів)
console.log("Використання productInRange з obj2 для obj1 з apply:");
console.log(obj2.productInRange.apply(obj1, [2, 5])); // Викликаємо метод productInRange з apply

//Метод call використовується для того, щоб викликати метод одного об'єкта в контексті іншого.

//Метод apply подібний до call, але приймає масив аргументів замість окремих значень.
