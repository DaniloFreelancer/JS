let unit = parseInt(prompt("Введіть, будь ласка, одиницю товару: ", "90"));

let unitLog = document.getElementById("unit");
unitLog.textContent = unit;

let number = parseInt(prompt("Введіть, будь ласка, кількість товару: ", "10"));

let numberLog = document.getElementById("number");
numberLog.textContent = number;

let worth = unit * number;

let worthLog = document.getElementById("worth");
worthLog.textContent = worth;

let tax = 5;

let worthResult = (worth * tax) / 100;

let percentLog = document.getElementById("percent");
percentLog.textContent = worthResult;
