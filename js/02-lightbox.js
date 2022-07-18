import { galleryItems } from './gallery-items.js';
// Change code below this line
const listEl = document.querySelector('.gallery');

// console.log(listEl);

function createGalleryMarkup(array) {
    return array
        .map(
            arr => `<a class="gallery__item" href="${arr.original}"><img class="gallery__image" 
            src="${arr.preview}" alt="${arr.description}" /></a>`
        )
        .join('');
}

// console.log(createGalleryMarkup(galleryItems));

// containerEl.innerHTML = createGalleryMarkup(galleryItems);
listEl.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
});

// console.log(galleryItems);
