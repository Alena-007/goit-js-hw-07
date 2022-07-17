import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerEl = document.querySelector('.gallery');

// console.log(listEl);

function createGalleryMarkup(array) {
    return array
        .map(
            arr => `<div class="gallery__item">
            <a class="gallery__link" href="${arr.original}">
            <img class="gallery__image" src="${arr.preview}" data-source="${arr.original}" alt="${arr.description}"/></a></div>`
        )
        .join('');
}

// console.log(createGalleryMarkup(galleryItems));

// containerEl.innerHTML = createGalleryMarkup(galleryItems);
containerEl.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

containerEl.addEventListener('click', openModal);

function openModal(event) {
    event.preventDefault();

    const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}" width="800" height="600">`,
        {
            onShow: () => window.addEventListener('keydown', onClickEsc),
            onClose: () => window.removeEventListener('keydown', onClickEsc),
        }
    );
    instance.show();

    function onClickEsc(event) {
        if (event.keyCode === 27) {
            instance.close();
        }
    }
}

console.log(galleryItems);
