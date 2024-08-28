const randomNumber = (length, min, max) => {
  const array = [];
  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    array.push(randomNum);
  }
  return array;
};

let array = randomNumber(10, 1, 1500);
// 30% = 0.7
let newArray = array.map((el) => (el > 1000 ? Math.floor(el * 0.7) : el));

alert(`Початковий масив ${array}\nКінцевий масив${newArray}`);
