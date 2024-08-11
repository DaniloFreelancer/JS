let columnsDataEntered = parseInt(prompt(`Введіть кількість стовпців: `, `6`));
let rowsDataEntered = parseInt(prompt(`Введіть кількість рядків: `, `5`));
let userText = prompt(`Введіть текст для комірки таблиці: `, `Ukraine`);

function table(row, column, message) {
  let table = `<table><tbody>`;
  for (let rowsIndex = 0; rowsIndex < row; rowsIndex++) {
    table += `<tr>`;
    for (let columnsIndex = 0; columnsIndex < column; columnsIndex++) {
      table += `<td>${message}</td>`;
    }
    table += `</tr>`;
  }
  table += `</tbody></table>`;
  return table;
}

document.write(table(rowsDataEntered, columnsDataEntered, userText));
