alert(`Розв'язання в консолі.`)

const sites = [
  {
    companyName: "TechWave Solutions",
    owner: "Іван Петренко",
    sponsors: [
      { lastName: "Коваленко", firstName: "Олег", investment: 150000 },
      { lastName: "Сидоренко", firstName: "Марія", investment: 50000 },
    ],
    year: 2005,
    cost: 12000,
  },
  {
    companyName: "WebPro Inc.",
    owner: "Анна Савченко",
    sponsors: [
      { lastName: "Іванов", firstName: "Петро", investment: 200000 },
      { lastName: "Федоров", firstName: "Юрій", investment: 80000 },
    ],
    year: 2010,
    cost: 15000,
  },
  {
    companyName: "DigitalCraft",
    owner: "Олександр Веремій",
    sponsors: [
      { lastName: "Костенко", firstName: "Андрій", investment: 120000 },
    ],
    year: 2007,
    cost: 9500,
  },
  {
    companyName: "SmartDev",
    owner: "Наталія Гринько",
    sponsors: [
      { lastName: "Ковальчук", firstName: "Олексій", investment: 300000 },
      { lastName: "Демченко", firstName: "Ірина", investment: 50000 },
    ],
    year: 2003,
    cost: 8000,
  },
  {
    companyName: "CodeMasters",
    owner: "Сергій Дмитренко",
    sponsors: [
      { lastName: "Лисенко", firstName: "Олег", investment: 100000 },
      { lastName: "Бойко", firstName: "Тарас", investment: 120000 },
    ],
    year: 2008,
    cost: 20000,
  },
];

//1)
const totalPriceOfCites = sites.reduce(
  (prevTotalPrice, price) => prevTotalPrice + price.cost,
  0
);

console.log(`1) Загальна ціна за усі сайти - ${totalPriceOfCites} доларів.`);

//2)

const amoutOfSites = sites.reduce((prevAmout, site) => {
  if (site.year >= 2000 && site.year <= 2009) prevAmout++;
  return prevAmout;
}, 0);

console.log(
  `2) Кількість сайтів розроблених між 2000 та 2009 рр. - ${amoutOfSites}`
);

//3)
// буде дорівнювати кількості елементів, які задовол умову
const countLargeSponsorships = sites.filter(
  (site) =>
    site.sponsors.reduce((sum, sponsor) => sum + sponsor.investment, 0) > 100000
).length;

console.log(
  `3) Кількість сум спонсорських вкладень більші за 100000 - ${countLargeSponsorships}.`
);

//4)
function allSponsors() {
  //Повертаємо новий масив, з перерахованими об'єктами
  return sites.map((sponsorElement) => sponsorElement.sponsors);
}
console.log(`4) ------------------------------------------------------------`);
console.log(allSponsors());
console.log(`------------------------------------------------------------`);

//5)
const yearWithMaxProfit = sites.reduce(
  //порівнюємо з першим об'єктом, якщо він виявиться більше, то просто виведемо його рік
  (maxYear, site) => (site.cost > maxYear.cost ? site : maxYear),
  sites[0] // за замовченням беремо перший об'єкт
).year; // після усіх порівнянь reduce повертає нам сайт з найбільшим придутком і вийде рядок site.year, що і дає рік.
console.log(`5) Рік з найбільшим прибутком: ${yearWithMaxProfit}.`);

//6)
function lessThan10000() {
  //копія об'єкту
  return JSON.parse(JSON.stringify(sites.filter((site) => site.cost <= 10000)));
}
function moreThan10000() {
  //копія об'єкту
  return JSON.parse(JSON.stringify(sites.filter((site) => site.cost > 10000)));
}

console.log("6) Сайти з вартістю до 10000:", lessThan10000());
console.log("6) Сайти з вартістю більше 10000:", moreThan10000());
