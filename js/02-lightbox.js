import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

function createMarkupGallery() {
  const itemMarkup = galleryItems
    .map(({ original, preview, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    })
    .join("");
  galleryRef.insertAdjacentHTML("beforeend", itemMarkup);
}
createMarkupGallery();

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
