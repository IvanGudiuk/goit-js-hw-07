import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");
const galleryItemsCreate = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery"><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a></div>`;
  })
  .join(" ");
galleryContainer.innerHTML = galleryItemsCreate;
const lightBox = new SimpleLightbox(".gallery a", {
  heightRatio: 0.9,
  widthRatio: 0.8,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
