let secondsNumber = parseInt(
  prompt("Введіть, будь ласка, кількість секунд: ", "3600")
);

let secondsNumberLog = document.getElementById("seconds");
secondsNumberLog.textContent = secondsNumber;

let minuteTransfer = 60;
let hourTransfer = 3600;

let minuteResult = Math.floor((secondsNumber % hourTransfer) / minuteTransfer);
let minuteResultLog = document.getElementById("minutes");
minuteResultLog.textContent = minuteResult;

let hourResult = Math.floor(secondsNumber / hourTransfer);
let hourResultLog = document.getElementById("hours");
hourResultLog.textContent = hourResult;
