let evenNumber = 0;
let oddNumber = 0;

for (let i = 0; i < 100; i++) {
	let firstNumber = 1 + Math.floor(Math.random()*1000)
  	if (firstNumber % 2 === 0) evenNumber++;
  	else oddNumber++;
}

alert(`Кількість парних: ${evenNumber}, непарних: ${oddNumber}.`);
if (evenNumber > oddNumber) alert(`Парних чисел більше.`);
else if (evenNumber < oddNumber) alert(`Непарних чисел більше.`);
else alert(`Кількість парних і непарних однакова.`);
