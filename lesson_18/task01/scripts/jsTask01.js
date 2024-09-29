"use strict";

if (confirm(`Почати тестування`)) {
  //Розробити калькулятор(додавання, віднімання, множення, ділення)
  function addition() {
    const firstNumber = parseFloat(
      document.getElementById("firstNumber").value
    );
    const secondNumber = parseFloat(
      document.getElementById("secondNumber").value
    );
    const result = firstNumber + secondNumber;

    document.getElementById("result").value = result;
  }

  function substraction() {
    const firstNumber = parseFloat(
      document.getElementById("firstNumber").value
    );
    const secondNumber = parseFloat(
      document.getElementById("secondNumber").value
    );
    const result = firstNumber - secondNumber;

    document.getElementById("result").value = result;
  }

  function multiply() {
    const firstNumber = parseFloat(
      document.getElementById("firstNumber").value
    );
    const secondNumber = parseFloat(
      document.getElementById("secondNumber").value
    );
    const result = firstNumber * secondNumber;

    document.getElementById("result").value = result;
  }

  function division() {
    const firstNumber = parseFloat(
      document.getElementById("firstNumber").value
    );
    const secondNumber = parseFloat(
      document.getElementById("secondNumber").value
    );
    if (secondNumber === 0) alert(`Ділення на 0 не можливе!`);
    const result = firstNumber / secondNumber;

    document.getElementById("result").value = result;
  }

  window.onload = function () {
    document.querySelector(".form__addition-button").onclick = addition;
    document.querySelector(".form__substraction-button").onclick = substraction;
    document.querySelector(".form__multiply-button").onclick = multiply;
    document.querySelector(".form__division-button").onclick = division;
  };
}
