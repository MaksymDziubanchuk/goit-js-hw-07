import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    galleryBox: document.querySelector('.gallery'),
    
}

function createGalleryMarkup(imgArray) {
    return imgArray.map(({preview, original, description}) => {
        return `<a class="gallery__item" href=${original}>
        <img class="gallery__image" src=${preview} alt=${description} />
      </a>`
      
    }).join('');
 }
 
 const imageMarkup = createGalleryMarkup(galleryItems);
 refs.galleryBox.insertAdjacentHTML('beforeend', imageMarkup);

 function onGalleryBoxClick(evt){
    evt.preventDefault()
    if(!evt.target.classList.contains('gallery__image')){
        return;
    }
 };
  
 refs.galleryBox.addEventListener('click', onGalleryBoxClick);


const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});
