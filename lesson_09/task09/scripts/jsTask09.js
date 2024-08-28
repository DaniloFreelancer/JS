const names = [
  `Ivan`,
  `Danil`,
  `Sofia`,
  `Maksim`,
  `Olga`,
  `Bohdan`,
  `Oleg`,
  `Maria`,
  `Sasha`,
];

const firstLatterOfNames = [];
for (let i = 0; i < names.length; i++) {
  firstLatterOfNames.push(names[i].charAt(0));
}

alert(`Новий масив - ${firstLatterOfNames.join(`, `)}`)
