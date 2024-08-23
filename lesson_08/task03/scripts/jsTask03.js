let userAmoutOfNames = parseInt(prompt(`Введіть кількість імен учнів: `, `2`))
const names = []
let meetOfIvan = 0;
for (let i = 0; i < userAmoutOfNames; i++) {
	const childNames = prompt(`Введіть ім'я ${i+1}-го учня: `)
	names.push(childNames)
	if (names[i] === `Ivan`) meetOfIvan++
}

alert(`Кількість разів, коли зустрілося ім'я Іван - ${meetOfIvan}.`)