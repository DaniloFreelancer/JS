function getBanner(imageSrc, title, link) {
 let banner = `<div class="block">`
	banner += `<a href="${link}" target="_blank">`
		banner += `<img src="${imageSrc}" alt="${title}">`
	banner += `</a>`
	banner += `<h2>${title}</h2>`
 banner += `</div>`
 return banner
}

document.write(getBanner("img/01.webp", "Aston Martin Rapide E", "https://youtu.be/jxfK05HJ2g4?si=yBArZK_EiCxriF8-"));
