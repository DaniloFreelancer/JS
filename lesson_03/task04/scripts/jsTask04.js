let age = parseInt(prompt("Введіть Ваш вік: ", "25"))

const maxKindergartenAge = 6;
const maxschoolAge = 18;
const maxUnivAge = 23;
const maxEmplMenAge = 60

if (age <= maxKindergartenAge)
	alert(`Ви - дитина у садочку.`)
else if(age <= maxschoolAge)
	alert (`Ви - школяр.`)
else if (age <= maxUnivAge)
	alert (`Ви - студент.`)
else if (age <= maxEmplMenAge)
	alert (`Ви - працівник.`)
else if ( age >= maxEmplMenAge) 
	alert (`Ви - пенсіонер.`)
else 
	alert(`Сталася помилка при введені віку, спробуйте ще раз.`)