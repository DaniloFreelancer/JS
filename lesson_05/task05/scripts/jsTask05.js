for (let numbersOfElements = 1; numbersOfElements <= 10; numbersOfElements++) {
  document.write(`
	<div class="block__item">
        <label for="priceInput" class="block__label">Product#${numbersOfElements}</label>
        <input
          type="text"
          name="price"
          id="priceInput"
          placeholder="Ціна за ${numbersOfElements} продукт"
          class="block__input"/>
   </div>
	`);
}
