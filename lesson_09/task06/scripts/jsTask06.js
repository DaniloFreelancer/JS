const array = [2, -3, 4, 5, -6, 0, 7];

const newArray = array.map(el =>  (el > array[0]) ? el*2 : el)

alert(`Початковий масив [${array}]\nКінцевий масив [${newArray}]`)