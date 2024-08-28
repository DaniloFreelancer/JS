const userAmout = parseInt(prompt(`Введіть кількість елементів: `, `9`))

const arrays = new Array(userAmout).fill(0)

alert(arrays.join(`. `))