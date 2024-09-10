function generateDancePairs(boys, girls) {
  const pairs = [];

  for (let i = 0; i < boys.length; i++) {
    for (let j = 0; j < girls.length; j++) {
		//Пушимо як масив, а не окремі значення
      pairs.push([boys[i], girls[j]]);
    }
  }

  return pairs;
}

const boys = ["Олексій", "Андрій", "Ігор"];
const girls = ["Марія", "Олена", "Світлана"];

const dancePairs = generateDancePairs(boys, girls);

console.log("Можливі пари для танців:");
dancePairs.forEach((pair) => console.log(`${pair[0]} та ${pair[1]}.`));
