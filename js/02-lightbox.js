import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    galleryBox: document.querySelector('.gallery'),
    
}

function createGalleryMarkup(imgArray) {
    return imgArray.map(({preview, original, description}) => {
        return `<li class='gallery__item' ><a class="gallery__link" href=${original}>
        <img class="gallery__image" src=${preview} alt=${description} />
      </a></li>`
      
    }).join('');
 }
 
 const imageMarkup = createGalleryMarkup(galleryItems);
 refs.galleryBox.insertAdjacentHTML('beforeend', imageMarkup);

const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});
