let firstWorthItem = parseInt(prompt("Введіть вартість першого товару:", "90"));
let firstWorthItemLog = document.getElementById("worth-01");
firstWorthItemLog.textContent = firstWorthItem;

let firstAmoutItem = parseInt(
  prompt("Введіть кількість одиниць першого товару: ", "2")
);
let firstAmoutItemLog = document.getElementById("number-01");
firstAmoutItemLog.textContent = firstAmoutItem;

let result_01 = firstWorthItem * firstAmoutItem;

let resultLog = document.getElementById("result-01");
resultLog.textContent = result_01;

//

let secondWorthItem = parseInt(
  prompt("Введіть вартість другого товару:", "50")
);
let secondWorthItemLog = document.getElementById("worth-02");
secondWorthItemLog.textContent = secondWorthItem;

let secondAmoutItem = parseInt(
  prompt("Введіть кількість одиниць другого товару: ", "5")
);
let secondAmoutItemLog = document.getElementById("number-02");
secondAmoutItemLog.textContent = secondAmoutItem;

let result_02 = secondWorthItem * secondAmoutItem;

let secondResultLog = document.getElementById("result-02");
secondResultLog.textContent = result_02;

//

let thirdWorthItem = parseInt(
  prompt("Введіть вартість третього товару:", "100")
);
let thirdWorthItemLog = document.getElementById("worth-03");
thirdWorthItemLog.textContent = thirdWorthItem;

let thirdAmoutItem = parseInt(
  prompt("Введіть кількість одиниць другого товару: ", "1")
);
let thirdAmoutItemLog = document.getElementById("number-03");
thirdAmoutItemLog.textContent = thirdAmoutItem;

let result_03 = thirdWorthItem * thirdAmoutItem;

let thirdResultLog = document.getElementById("result-03");
thirdResultLog.textContent = result_03;

//

let totalCost = result_01 + result_02 + result_03;

let totalCostLog = document.getElementById("total-cost");
totalCostLog.textContent = totalCost;
