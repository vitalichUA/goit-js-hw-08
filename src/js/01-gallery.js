// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';


const imageContainer = document.querySelector('.gallery');


const getMarkup = createGalleryMarkup(galleryItems);
imageContainer.insertAdjacentHTML('beforeend', getMarkup);


function createGalleryMarkup(images) {

    return images
        .map(({ preview, original, description }) => {

            return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`
        }).join('');

};

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt', });