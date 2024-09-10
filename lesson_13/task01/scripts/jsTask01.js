// створюємо функцію з масивом, який набуває результати
function generateSubsets(array){
	// масив результату, який ми виведемо
	const result = [];

	// внутрішня функція має значення поданого об'єкту і індекс
	function backTrack(currentSubset, index){
		// в результат додаємо копію масиву(поточну підмножину)
		result.push([...currentSubset])
		// циклом проходимось по зовішньому масиву(його значення 1,2,3)
		for (let i = index; i < array.length; i++){
			// в поточний масив додаємо і-товий елемент масиву
			currentSubset.push(array[i])

			//викликаємо рекурсивно функцію, не змінюючи поточний масив, але збільшувати і-ку
			backTrack(currentSubset, i+1)

			// видаляти останній елемент, щоб розглянути наступну комбінацію
			currentSubset.pop()
		}
	}
	// виклик здійснюється спочатку з пустого масиву
	backTrack([], 0)
	return result
}

// створили масив
const array = [1,2,3]
//додали значення
const subject	= generateSubsets(array)
//вивели
console.log(subject)