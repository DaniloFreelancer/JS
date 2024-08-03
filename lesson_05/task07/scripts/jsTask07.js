let userInput = parseInt(prompt(`Введіть кількість абзаців: `, `4`));

for (let i = 1; i <= userInput; i++) {
  document.write(`<div class="block__item">
	<h1>Заголовок ${i}</h1>`);
  for (let j = 1; j <= i; j++) {
    document.write(`<p>Розділ ${i}, параграф ${j}</p>`);
  }
  document.write(`<hr>
	</div>`);
}
