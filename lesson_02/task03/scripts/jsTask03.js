const birth = parseInt(prompt("Введіть Ваш рік народження:", "1991"));

const birthNumber = document.getElementById("date-of-birth");
birthNumber.textContent = birth;

const currentYear = 2024;

const years = currentYear - birth;

const yearsLog = document.getElementById("years");
yearsLog.textContent = years;
console.log(`${years}`);
