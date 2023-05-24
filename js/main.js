const loader = document.querySelector(".loader");
const main = document.querySelector(".main");

console.log(loader);
console.log(main);

function fade() {
  loader.style.display = "none";
  main.style.display = "block";
}

setInterval(fade, 4000);

window.addEventListener("load", fade);
