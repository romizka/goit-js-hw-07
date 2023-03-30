import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = galleryItems.map(item => `
<li class="gallery__item">
<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
</li>
`).join('');


  galleryContainer.addEventListener('click', (e) => {
    e.preventDefault();

    const lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionPosition: 'bottom',
        captionType: 'attr',
        captionsData: 'alt',
        captionDelay: 250,
      });
  })
