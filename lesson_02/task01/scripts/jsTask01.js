"use strict";

let a = parseFloat(prompt("Введіть, будь ласка, число а: ", "10"));
let b = parseFloat(prompt("Введіть, будь ласка, число b: ", "12"));
let c = parseFloat(prompt("Введіть, будь ласка, число c: ", "8"));
console.log(`Ви ввели: a=${a}, b=${b}, c=${c}`);

//1

let s1 = a + 12 + b;
console.log(`Результат S1: ${s1}`);

let firstResultElement = document.getElementById("result01");
firstResultElement.textContent = s1;

//2

let s2 = Math.sqrt((((a + b) / 2) * 1) / a).toFixed(5);
console.log(`Результат S2: ${s2}`);

let secondResultElement = document.getElementById("result02");
secondResultElement.textContent = s2;

//3

let s3 = Math.cbrt((a + b) * c).toFixed(5);
console.log(`Результат S3: ${s3}`);

let thirdResultElement = document.getElementById("result03");
thirdResultElement.textContent = s3;

//4

let s4 = Math.sin(a / -b).toFixed(5);
console.log(`Результат S4(числове значення): ${s4}`);

let fourthResultElement = document.getElementById("result04");
fourthResultElement.textContent = s4;

function toDegrees(angle) {
  return angle * (180 / Math.PI);
}

let s4deg = Math.sin(toDegrees(a / -b)).toFixed(5);

console.log(`Результат S4: ${s4deg} градусів`);

let fourthDegResultElement = document.getElementById("result_04");
fourthDegResultElement.textContent = s4deg;
