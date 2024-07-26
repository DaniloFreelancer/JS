let centimeters = parseFloat(prompt("Введіть, будь ласка, число (см):", "20"));

let centimetersLog = document.getElementById("centimeters");
centimetersLog.textContent = centimeters;

let transefM = 100;
let transefKM = 100000;

let meters = centimeters / transefM;
let metersLog = document.getElementById("meters");
metersLog.textContent = meters;

let kiloMeters = centimeters / transefKM;
let kiloMetersLog = document.getElementById("kilometers");
kiloMetersLog.textContent = kiloMeters;
