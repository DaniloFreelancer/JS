let monthNumber = parseInt(prompt(`Введіть номер місяця:`, `6`));

// const winter = 1;
// const spring = 2;
// const summer = 3;
// const august = 4;

if (monthNumber >= 1 && monthNumber <= 12) {
  if (monthNumber === 1 || monthNumber === 2 || monthNumber === 12)
    alert(`Пора року - Зима`);
  else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5)
    alert(`Пора року - Весна`);
  else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8)
    alert(`Пора року - Літо`);
  else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11)
    alert(`Пора року - Осінь`);
} 
else 
	alert(`Не правильно вказано номер місяця.`);
