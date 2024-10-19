"use strict";

if (confirm(`Почати тестування?`)) {
  const startProcess = new Date();

  console.log(`Початок процедури: ${startProcess}`);

  const process = parseFloat(
    prompt(`Скільки хочете, щоб тривала процедура`, `30`)
  );

  console.log(`Minutes - ${startProcess.getMinutes()};`);
  if (startProcess.getMinutes() > process) alert(`Процедуру заверешно!`);
  else alert(`Процедура ще триває.`);

  startProcess.setMinutes(startProcess.getMinutes() + process);

  console.log(`Кінець процедури: ${startProcess}`);
}
