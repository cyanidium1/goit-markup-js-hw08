// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const gallery = document.querySelector('.gallery');

function makeGall() {
  return galleryItems.map(items => `<a class="gallery__item" href="${items.original}">
  <img class="gallery__image" src="${items.preview}" alt="${items.description}" />
</a>`,).join('');
}
gallery.insertAdjacentHTML('afterbegin', makeGall(galleryItems));

console.log(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});