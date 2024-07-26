let firstNumber = parseFloat(prompt("Введіть, будь ласка, перше число: ", "5"));
let secondNumber = parseFloat(
  prompt("Введіть, будь ласка, друге число: ", "20")
);

//

sum = firstNumber + secondNumber;
let firstResultElement = document.getElementById("result01");
firstResultElement.textContent = sum;

//

mutliply = firstNumber * secondNumber;
let secondResultElement = document.getElementById("result02");
secondResultElement.textContent = mutliply;

//

division = firstNumber / secondNumber;
let thirdResultElement = document.getElementById("result03");
thirdResultElement.textContent = division;

//
