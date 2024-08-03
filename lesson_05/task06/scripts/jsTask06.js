let rows = 3;
let colums = 7;

for (let i = 1; i <= rows; i++) {
  document.write(`<tr>`);
  for (let j = 1; j <= colums; j++) {
    document.write(`<th>${j}</th>`);
  }
  document.write(`</tr>`)
}
