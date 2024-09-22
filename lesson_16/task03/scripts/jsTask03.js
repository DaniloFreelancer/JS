"use strict";

if (confirm(`Почати тестування?`)) {
  //Описує послугу з полями для назви, вартості та терміну виконання.
  class Service {
    //вартість не може бути менше за 0
    #cost;
    constructor(name, cost, duration) {
      this.name = name;
      this.Cost = cost;
      this.duration = duration;
    }

    get Cost() {
      return this.#cost;
    }

    set Cost(cost) {
      if (cost < 0) throw new Error(`Вартість не може бути менше за 0`);
      this.#cost = cost;
    }

    toString() {
      return `${this.name} - Вартість: ${this.Cost} грн, Термін виконання: ${this.duration} днів`;
    }
  }
  //Описує філіал компанії з полями для країни, міста, вулиці та номера будинку.
  class Branch {
    constructor(country, city, street, buildingNumber) {
      this.country = country;
      this.city = city;
      this.street = street;
      this.buildingNumber = buildingNumber;
    }

    toString() {
      return `${this.city}, ${this.street}, будинок ${this.buildingNumber}, ${this.country}`;
    }
  }

  //Має поля для назви фірми, дати заснування, а також масиви для послуг і філіалів.
  class Company {
    constructor(name, foundingYear, foundingMonth) {
      this.name = name;
      this.foundingYear = foundingYear;
      this.foundingMonth = foundingMonth;
      this.services = [];
      this.branches = [];
    }

    //Послуги
    addService(service) {
      this.services.push(service);
    }

    //Філіали
    addBranch(branch) {
      this.branches.push(branch);
    }

    //Рік компанії
    getCompanyAge(currentYear, currentMonth) {
      let years = currentYear - this.foundingYear;
      if (currentMonth < this.foundingMonth) {
        years -= 1; // Якщо поточний місяць ще не досяг місяця заснування, зменшуємо на 1
      }
      return years;
    }

    //Філіали в місті
    getBranchesInCity(city) {
      //фільтруємо, якщо назва міста співпала з заданим містом
      const branchesInCity = this.branches.filter(
        (branch) => branch.city === city
      );
      if (branchesInCity.length === 0) {
        return `Філіалів у місті ${city} не знайдено.`;
      }
      return (
        `Філіали у місті ${city}:\n` +
        branchesInCity.map((branch) => branch.toString()).join("\n")
      );
    }

    // Метод виведення послуг, що можуть бути виконані за вказану суму і термін
    getServicesByBudgetAndDuration(budget, maxDuration) {
      //перевіряємо, чи сума та термін не перевищує допустимі норми
      const availableServices = this.services.filter(
        (service) => service.Cost <= budget && service.duration <= maxDuration
      );
      if (availableServices.length === 0) {
        return `Немає послуг, які можна виконати за суму ${budget} грн і в термін ${maxDuration} днів.`;
      }
      return (
        `Послуги до ${budget} грн і до ${maxDuration} днів:\n` +
        availableServices.map((service) => service.toString()).join("\n") //+ усі можливі варіанти, на які вистачає коштів і доступний термін
      );
    }

    // Метод toString для виведення інформації про компанію
    toString() {
      return `Назва фірми: ${this.name}, Заснована: ${this.foundingYear} року, ${this.foundingMonth}-го місяця.`;
    }
  }

  try {
    const company = new Company("Tech Solutions", 2015, 3);

    // Додаємо послуги
    company.addService(new Service("Розробка вебсайтів", 15000, 30));
    company.addService(new Service("Технічна підтримка", 5000, 5));
    company.addService(new Service("Консультація", 2000, 2));

    // Додаємо філіали
    company.addBranch(new Branch("Україна", "Київ", "Шевченка", 10));
    company.addBranch(new Branch("США", "Нью-Йорк", "Бродвей", 5));
    company.addBranch(new Branch("Україна", "Львів", "Грушевського", 12));

    // Виводимо інформацію про компанію
    console.log(company.toString());

    // Визначаємо кількість років існування компанії
    const currentYear = 2024;
    const currentMonth = 9; // Вересень (9 місяць)
    console.log(
      `Компанії ${company.getCompanyAge(currentYear, currentMonth)} років`
    );

    // Виведення філіалів у місті "Київ"
    console.log(company.getBranchesInCity("Київ"));

    // Виведення послуг, що можуть бути виконані за 6000 грн і 7 днів
    console.log(company.getServicesByBudgetAndDuration(6000, 7));
  } catch (error) {
    console.log(error.message);
  }
}
