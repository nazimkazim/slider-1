const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
const contanier = document.querySelector('.container')

const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
let counter = 0;

const imageWidth = slider.clientWidth;

slider.style.transform = `translateX(${-imageWidth * counter}px)`;

nextButton.addEventListener("click", () => {
  if (counter >= images.length - 1) {
    counter = 0;
    slider.style.transform = `translateX(${0}px)`;
  } else {
    slider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slider.style.transform = `translateX(${-imageWidth * counter}px)`;
  }
});

prevButton.addEventListener("click", () => {
  if (counter < 1) {
    slider.style.transition = "transform 0.4s ease-in-out";
    counter = images.length - 1;
    slider.style.transform = `translateX(${-imageWidth * counter}px)`;
  } else {
    slider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slider.style.transform = `translateX(${-imageWidth * counter}px)`;
  }
});

contanier.addEventListener('scroll', () => {
    console.log('hrr');
    let value = window.scrollX
    console.log(value);
    slider.style.transform = `translateX(${value}px)`;
})
