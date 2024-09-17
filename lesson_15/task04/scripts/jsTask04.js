class Banner {
  constructor(imageAndLinks) {
    // Масив об'єктів (графічні зображення та посилання на сайти)
    this.banners = imageAndLinks;
  }
  // Метод для випадкового вибору банера
  getRandomBanner() {
    const randomIndex = Math.floor(Math.random() * this.banners.length);
    return this.banners[randomIndex];
  }
  // Метод виведення випадкового банера на екран
  displayRandomBanner() {
    const banner = this.getRandomBanner();
    //використовуємо ті елементи об'єкту, які будуть створені в подальшому image, link
    document.write(`
      <a href="${banner.link}" target="_blank">
        <img src="${banner.image}" alt="Banner" style="width: 300px; height: auto;">
      </a>
    `);
  }
}

const bannerData = [
  {
    image: `https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp`,
    link: `https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_operators`,
  },
  {
    image: `https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg`,
    link: `https://learn.microsoft.com/uk-ua/dotnet/csharp/programming-guide/concepts/`,
  },
  {
    image: `https://cdn.pixabay.com/photo/2023/01/26/22/14/ai-generated-7747165_640.jpg`,
    link: `https://www.python.org/`,
  },
];

const bannerDisplay = new Banner(bannerData);
bannerDisplay.displayRandomBanner();
