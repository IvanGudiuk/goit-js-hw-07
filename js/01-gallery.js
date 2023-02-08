import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const galleryItemsCreate = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
  })
  .join(" ");

galleryContainer.innerHTML = galleryItemsCreate;

const onImageClick = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;
  else {
    const targetLink = event.target.dataset.source;
    basicLightbox
      .create(
        `
  	<img width="1400" height="900" src="${targetLink}">
  `
      )
      .show();
  }
};
galleryContainer.addEventListener("click", onImageClick);
