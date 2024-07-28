let askNumber = parseInt(prompt("Я згенерував число від 1 до 5. Спробуйте вгадати. У вас дві спроби."));

let minNumber = 1;
let maxNumber = 5;

let randomNumber = minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1));

console.log(randomNumber);

if (askNumber === randomNumber) 
	alert(`Вітаю! Ви вгадали число!`);
else {
  alert(`Ви не вгадали, згенероване число було ${randomNumber}. Генерую нове число.`);
  askNumber = prompt("Я згенерував число від 1 до 5. Спробуйте вгадати. У вас остання спроба.");
  if (askNumber === randomNumber)
	alert(`Вітаю! Ви вгадали число!`);
  else
  	alert(`Ви вичерпали усі спроби, згенероване число було ${randomNumber}.`);
}

