function createIterator(min, max){
	let current = min

	function iteration(){
		//результат рівний поточному значенню
		const result = current
		//збільшуємо поточне значення
		current++

		//якщо воно більше ніж максимальне
		if(current > max){
			//поточне значення прирівнюється до мінімального
			current=min
		}

		return result
	}

	return iteration
}
const userMinNumber = parseInt(prompt(`Введіть мінімальне значення`))
const userMaxNumber = parseInt(prompt(`Введіть максимальне значення`))

const iterator = createIterator(userMinNumber, userMaxNumber)
for (let i = userMinNumber; i <= userMaxNumber; i++) {
	console.log(iterator())
}