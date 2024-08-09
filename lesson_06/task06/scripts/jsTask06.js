let amoutOfMoney = parseInt(prompt(`Скільки бажаєте вкласти?: `, `10000`));
for (let yearsIndex = 1; yearsIndex <= 20; yearsIndex++) {
  let interestRate = amoutOfMoney * 20 / 100; // Відсоткова ставка, скільки виплачує банк з загальної суми
  const tax = interestRate * 5 / 100; // Податок від суми доходу
  interestRate -= tax; // Прибуток з урахуванням податку
  amoutOfMoney += interestRate; // Загальний прибуток користувача
}
alert(
  `Ваш заробіток становить за 20 років становить: ${Math.ceil(amoutOfMoney)} грн.`
);
