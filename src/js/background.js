const bodyContent = document.querySelector("body");

const arr = Array(32).fill("pixar");

const images = arr.map((text, index) => `${text}${String(index+1).padStart(2, "0")}`);
const index = Math.floor(Math.random() * images.length);

bodyContent.style.background = "url('src/images/" + images[index] + ".jpg')";