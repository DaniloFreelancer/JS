let firstChildName = prompt("Введіть ім'я першої дитини:", "Андрій");
let firstChildCandy = parseInt(
  prompt("Введіть кількість цукерок у першої дитини: ", "2")
);

let secondChildName = prompt("Введіть ім'я другої дитини:", "Максим");
let secondChildCandy = parseInt(
  prompt("Введіть кількість цукерок у другої дитини: ", "2")
);

if (firstChildCandy > secondChildCandy)
  alert(`${firstChildName} має більше цукерок`);
else if (firstChildCandy === secondChildCandy)
  alert(`Кількість цукерок у ${firstChildName} та ${secondChildName} однакова`);
else
	alert(`${secondChildName} має більше цукерок`);
