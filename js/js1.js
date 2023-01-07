const slides = document.querySelectorAll(".slide");
const length = slides.length;

const prev = document.querySelector(".control--prev");
const next = document.querySelector(".control--next");

var index = 0;
//console.log(slides[1]);

// Previous
prev.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("slide--current");
  });
  index--;
  if (index < 0) {
    index = length - 1;
  }
  slides[index].classList.add("slide--current");
});

// Next
next.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("slide--current");
  });
  index++;
  if (index > length - 1) {
    index = 0;
  }
  slides[index].classList.add("slide--current");
});
