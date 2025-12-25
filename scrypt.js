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
  timer = setInterval(nextSlide, 4000);
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

const catalogBtn = document.getElementById("catalogBtn");
const catalogMenu = document.getElementById("catalogMenu");

catalogBtn.addEventListener("click", function() {
  if (catalogMenu.style.display === "flex") {
    catalogMenu.style.display = "none";
  } else {
    catalogMenu.style.display = "flex";
  }
});

document.addEventListener("click", function(e) {
  if (!catalogBtn.contains(e.target) && !catalogMenu.contains(e.target)) {
    catalogMenu.style.display = "none";
  }
});

let langData = {};

fetch("lang.json")
    .then(response => response.json())
    .then(data => {
        langData = data;

        const savedLang = getCookie("siteLang") || "ge";
        changeLang(savedLang);
    });

function setCookie(name, value, days) {
  document.cookie = `${name}=${value}; max-age=${days*24*60*60}; path=/`;
}

function getCookie(name) {
  return document.cookie
    .split("; ")
    .find(row => row.startsWith(name + "="))
    ?.split("=")[1];
}

function setLang(lang) {
  changeLang(lang);
  setCookie("siteLang", lang, 7);
}

function changeLang(lang) {
    document.getElementById("base_info_1").textContent = langData[lang].base_info_1
    document.getElementById("base_info_2").textContent = langData[lang].base_info_2
    document.getElementById("base_info_3").textContent = langData[lang].base_info_3

    document.getElementById("main").textContent = langData[lang].main
    document.getElementById("signup").textContent = langData[lang].signup;
    document.getElementById("signin").textContent = langData[lang].signin;
    document.getElementById("info").textContent = langData[lang].info;
    document.getElementById("contact").textContent = langData[lang].contact;
    document.getElementById("services").textContent = langData[lang].services;
    document.getElementById("config").textContent = langData[lang].config;

    document.getElementById("catalog").textContent = langData[lang].catalog;
    document.getElementById("search").placeholder = langData[lang].search;

    document.getElementById("type1").textContent = langData[lang].type1;
    document.getElementById("type2").textContent = langData[lang].type2;
    document.getElementById("type3").textContent = langData[lang].type3;
    document.getElementById("type4").textContent = langData[lang].type4;
    document.getElementById("type5").textContent = langData[lang].type5;
}



startAuto();

