console.log("page loaded");

const images = document.querySelectorAll(".gallery img");
const preview = document.getElementById("preview");
const caption = document.querySelector("figcaption");

onInit();

function onInit() {
  for (let img of images) {
    img.addEventListener("click", (e) => {
      showImage(e);
    });
  }
}

const showImage = (e) => {
  preview.src = e.target.src;
  preview.alt = e.target.alt;
  caption.innerText = e.target.alt;
};
