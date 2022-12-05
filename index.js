const main = document.getElementById("main");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const image = document.querySelectorAll(".carousalImage");
let currentIndex = 0;

leftArrow.addEventListener("click", leftClick);
rightArrow.addEventListener("click", rightClick);

function leftClick() {
  image[currentIndex].classList.remove("active");
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) {
    currentIndex = image.length - 1;
  }
  image[currentIndex].classList.add("active");
}

function rightClick() {
  image[currentIndex].classList.remove("active");
  currentIndex = currentIndex + 1;
  if (currentIndex === image.length) {
    currentIndex = 0;
  }
  image[currentIndex].classList.add("active");
}
