import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = galleryItems.map(item => `
  <div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
    </a>
  </div>
`).join('');

function handleGalleryItemClick(event) {
    event.preventDefault();
  
    const imageSrc = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${imageSrc}" width="800" height="600">`);
    instance.show();
  }

const galleryImages = document.querySelectorAll('.gallery__image');
galleryImages.forEach(image => {
  image.addEventListener('click', handleGalleryItemClick);
});


