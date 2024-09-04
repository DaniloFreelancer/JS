document.addEventListener("DOMContentLoaded", function () {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const text = element.getAttribute("data-text");
        const delay = parseInt(element.getAttribute("data-delay")) || 0;
        let index = 0;

        function typeText() {
          if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100); // Adjust the speed here
          }
        }

        setTimeout(() => {
          element.classList.add("visible");
          setTimeout(typeText, 100); // Adjust the delay before typing starts
        }, delay);

        observer.unobserve(element);
      }
    });
  }, options);

  const elements = document.querySelectorAll(".title-type");
  elements.forEach((element) => {
    observer.observe(element);
  });
});

let rows = 6;
let colums = 6;


