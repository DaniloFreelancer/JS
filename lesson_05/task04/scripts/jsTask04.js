let userRandomNumbers = parseInt(
  prompt(`Введіть кількість випадкових чисел: `, `10`)
);

for (let i = 0; i < userRandomNumbers; i++) {
  let randomNumber = 1 + Math.floor(Math.random() * 100);
  document.write(`
		<ul style="font-size: 28px">
			<li>${randomNumber}</li>
	 	</ul>
	`);
}
