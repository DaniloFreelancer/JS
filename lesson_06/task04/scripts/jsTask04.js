for (let tree = 1; tree <= 3; tree++) {
  document.write(`<div>`);
  for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= i; j++) {
      document.write(`o`);
    }
    document.write(`<br>`);
  }
  document.write(`</div>`);
}
