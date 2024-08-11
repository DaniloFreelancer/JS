let centimeters = parseFloat(prompt(`Введіть число в см.`, `1000`));
let kilograms = parseFloat(prompt(`Введіть число в кг.`, `100`));
let kilometers = parseFloat(prompt(`Введіть число в км.`, `10`));

function getCentimetersToInch(a) {
  const result = a / 2.54;
  return result.toFixed(2);
}

alert(`${centimeters} см. - ${getCentimetersToInch(centimeters)} дюйм.`);

function getKilogramsToPound(a) {
  const result = a * 2.20462;
  return result.toFixed(2);
}

alert(`${kilograms} кг. - ${getKilogramsToPound(kilograms)} фунт.`);

function getKilometersToMile(a) {
  const result = a * 0.621371;
  return result.toFixed(2);
}

alert(`${kilometers} км. - ${getKilometersToMile(kilometers)} миль.`);
