let firstUserNumber = parseFloat(prompt(`Введіть перше число: `, `10`))
let secondUserNumber = parseFloat(prompt(`Введіть друге число: `, `1`))
let thirdUserNumber = parseFloat(prompt(`Введіть третє число: `, `20`))
let fourthUserNumber = parseFloat(prompt(`Введіть четверте число: `, `5`))


let sum = (a, b, c, d) => a + b + c + d

alert (`Сума - ` + sum(firstUserNumber, secondUserNumber, thirdUserNumber, fourthUserNumber))

let multi = (a, b, c, d) => a * b * c * d

alert ('Добуток - ' + multi(firstUserNumber, secondUserNumber, thirdUserNumber, fourthUserNumber))

let average = (a, b, c, d) => (a + b + c + d)/4

alert ('Середнє арифметичне - ' + average(firstUserNumber, secondUserNumber, thirdUserNumber, fourthUserNumber))

let min = (a, b, c, d) => Math.min(a, b, c, d)

alert ('Найменше - ' + min(firstUserNumber, secondUserNumber, thirdUserNumber, fourthUserNumber))
