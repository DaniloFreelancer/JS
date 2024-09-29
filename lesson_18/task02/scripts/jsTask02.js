"use strict";

if (confirm("Почати тестування?")) {
  const euroExhangeRate = 46;
  const dollarExhangeRate = 41;

  function convertToEuro() {
    const grnValue = parseFloat(document.getElementById("grn").value);
    const resultOfConvert = grnValue / euroExhangeRate;

    document.getElementById("euro").value = resultOfConvert.toFixed(2);
  }

  function convertToDollar() {
    const grnValue = parseFloat(document.getElementById("grn").value);
    const resultOfConvert = grnValue / dollarExhangeRate;

    document.getElementById("dollar").value = resultOfConvert.toFixed(2);
  }

  window.onload = function () {
    document.querySelector(".form__convert-button").onclick = function () {
      convertToEuro();
      convertToDollar();
    };
  };
}
