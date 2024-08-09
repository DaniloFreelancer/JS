let baseCharCode = `A`.charCodeAt(0);

const rows = 5;
const columns = 5;

for (let rowsIndex = 0; rowsIndex < rows; rowsIndex++) {
  let line = ``;
  for (let columnsIndex = 0; columnsIndex < columns; columnsIndex++) {
    let char = String.fromCharCode(baseCharCode + rowsIndex + columnsIndex); // додаємо зсув, тобто відносно рядків і стовбців. 
    line += char + ``;
  }
  document.write(line + `<br>`)
}
