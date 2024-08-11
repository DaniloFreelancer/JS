function getRandomImage() {
  const randomImageNumber = 1 + Math.floor(Math.random() * 4);
  let image = `<a>`;
  	image += `<img src="img/0${randomImageNumber}.webp">`;
  image += `</a>`;
  return image;
}

document.write(getRandomImage());
