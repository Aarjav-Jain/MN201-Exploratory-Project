const imageArray = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
];
let i = 0;
const left = document.querySelector("#left");
const right = document.querySelector("#right");
let scroll = document.querySelector("#scroll");
const h = document.querySelector("h1");

left.addEventListener("click", () => {
  if (i == 0) i = 5;
  else {
    i = i - 1;
  }
  scroll.src = imageArray[i];
});

right.addEventListener("click", () => {
  if (i == 5) i = 0;
  else {
    i = i + 1;
  }
  scroll.src = imageArray[i];
});
