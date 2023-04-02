import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
const galleryLinks = document.querySelectorAll('.gallery__link');

galleryContainer.innerHTML = galleryItems.map(item => `
<li class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
</li>
`).join('');


galleryLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const lightbox = new SimpleLightbox(link, {
        captions: true,
        captionPosition: 'bottom',
        captionType: 'attr',
        captionsData: 'alt',
        captionDelay: 250,
      });
  });
});
