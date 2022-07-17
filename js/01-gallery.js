import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
galleryRef.addEventListener("click", onShowBigImage);

function createMarkupGallery() {
  const itemMarkup = galleryItems
    .map(({ original, preview, description }) => {
      return `
        <div class="gallery__item">
         <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
         </a>
        </div>`;
    })
    .join("");

  galleryRef.insertAdjacentHTML("beforeend", itemMarkup);
}
createMarkupGallery();

function onShowBigImage(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  let bigImageSrc = evt.target.dataset.source;

  const modal = basicLightbox.create(
    `<img src="${bigImageSrc}" width="800" height="600">`
  );
  modal.show();

  if (modal.visible()) {
    window.addEventListener("keydown", onPressKeyESC);
  }

  function onPressKeyESC(evt) {
    if (evt.code === "Escape") {
      modal.close();
      window.removeEventListener("keydown", onPressKeyESC);
    }
  }
}
