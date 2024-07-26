let secondsNumber = parseInt(
  prompt("Введіть, будь ласка, кількість секунд: ", "3600")
);

let secondsNumberLog = document.getElementById("seconds");
secondsNumberLog.textContent = secondsNumber;

let minuteTransfer = 60;
let minuteResult = (secondsNumber / minuteTransfer).toFixed(1);
let minuteResultLog = document.getElementById("minutes");
minuteResultLog.textContent = minuteResult;

let hourTransfer = 3600;
let hourResult = (secondsNumber / hourTransfer).toFixed(1);
let hourResultLog = document.getElementById("hours");
hourResultLog.textContent = hourResult;
