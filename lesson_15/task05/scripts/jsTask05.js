if (confirm(`Почати тестування?`)) {
  class DanceDirector {
    constructor(boys, girls) {
      this.boys = boys;
      this.girls = girls;
    }

    generateNumberOfBoys() {
      const randomIndex = Math.floor(Math.random() * this.boys.length);
      return this.boys[randomIndex];
    }
    generateNumberOfGirls() {
      const randomIndex = Math.floor(Math.random() * this.girls.length);
      return this.girls[randomIndex];
    }

    groupOfGirlsAndBoys() {
      return `До залу запрошується пара ${this.generateNumberOfBoys()} та ${this.generateNumberOfGirls()} на танець.`;
    }

    run() {
      setInterval(() => {
        alert(this.groupOfGirlsAndBoys());
      }, 5000);
    }
  }

  const boys = [`Данило`, `Петро`, `Гордій`, `Олесь`, `Пилип`, `Вадим`];
  const girls = [`Поліна`, `Олеся`, `Марічка`, `Софія`, `Кіра`];

  const danceDirector = new DanceDirector(boys, girls);

  danceDirector.run();
}
