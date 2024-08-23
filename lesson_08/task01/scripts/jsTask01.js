let numberOfItems = parseInt(prompt(`Введіть кількість предметів: `, `3`))
const items = []
let sum = 0;

for (let i = 1; i <= numberOfItems; i++) {
	let assessmentSubject;
	do {
		assessmentSubject = parseInt(prompt(`Введіть оцінку від 1 до 5 з ${i}-го предмету`))
		if (isNaN(assessmentSubject) || assessmentSubject < 1 || assessmentSubject > 5){
			alert("Введіть коректну оцінку від 1 до 5.");
		} 
	}
	while(isNaN(assessmentSubject) || assessmentSubject < 1 || assessmentSubject > 5)
	items.push(assessmentSubject)
	sum += assessmentSubject;
}

const result = Math.floor(sum / items.length);

alert(`Масив ${items}. Середнє значення ${result}.`) 


function getResultOfAssessment(value){
	let result;
	switch (value) {
		case 1:
		case 2: result = `Двійочник.`
		break;
		case 3:  result = `Трійочник.`
		break;
		case 4: 	result = 'Хорошист.'
		break;
		case 5:	result = `Відмінник.`
		break;
		default:
			throw new Error(`Некоректно введена оцінка`)
	}
	return result
}

const finalResult = getResultOfAssessment(result)
alert(`${finalResult}`)
