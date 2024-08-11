let userMonthNumber = parseInt(prompt(`Введіть номер місяця`));

function monthName(userMonthNumber) {
	switch (userMonthNumber){
		case 1:
			return `Січень ` // return заміняє break
		case 2:
			return `Лютий`
		case 3:
			return `Березнь`
		case 4:
			return `Квітень`
		case 5:
			return `Травень`
		case 6:
			return `Червень`
		case 7:
			return `Липень`
		case 8:
			return `Серпень`
		case 9:
			return `Вересень`
		case 10:
			return `Жовтень`
		case 11:
			return `Листопад`
		case 12:
			return `Грудень`
		default:
			return `Введенно некоректні дані, введіть число від 1 до 12`
		
	}
}

alert(monthName(userMonthNumber))