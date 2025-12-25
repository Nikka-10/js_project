const track = document.querySelector(".slides");
const slides = document.querySelectorAll(".slides img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let index = 0;
let timer;

slides.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");

  dot.addEventListener("click", () => {
    index = i;
    update();
    resetAuto();
  });

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function update() {
  track.style.transform = `translateX(-${index * 1200}px)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function nextSlide() {
  index = (index + 1) % slides.length;
  update();
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  update();
}

function startAuto() {
  timer = setInterval(nextSlide, 5000);
}

function resetAuto() {
  clearInterval(timer);
  startAuto();
}

next.addEventListener("click", () => {
  nextSlide();
  resetAuto();
});

prev.addEventListener("click", () => {
  prevSlide();
  resetAuto();
});

startAuto();

