const preview = document.getElementById("preview");
const caption = document.querySelector("figcaption");
const gallery = document.querySelector(".gallery");

onInit();

async function onInit() {
  const module = await import("./imagesSource.js");
  const imagesSource = module.imagesSource;
  displayFirstImage(imagesSource[0]);
  addImages(imagesSource);
}

function displayFirstImage(firstImage) {
  console.log("loading first image");
  preview.src = firstImage.src;
  preview.alt = firstImage.alt;
  caption.innerText = firstImage.alt;
}

function addImages(imagesSource) {
  for (let img of imagesSource) {
    let newImage = document.createElement("img");
    newImage.src = img.src;
    newImage.alt = img.alt;
    newImage.addEventListener("click", (e) => {
      showImage(e);
    });
    gallery.appendChild(newImage);
  }
}

const showImage = (e) => {
  preview.src = e.target.src;
  preview.alt = e.target.alt;
  caption.innerText = e.target.alt;
};

