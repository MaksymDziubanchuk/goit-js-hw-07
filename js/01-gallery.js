import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    galleryBox: document.querySelector('.gallery'),
    
}

function createGalleryMarkup(imgArray) {
   return imgArray.map(({preview, original, description}) => {
       return `<div class="gallery__item">
       <a class="gallery__link" href="large-image.jpg">
         <img
           class="gallery__image"
           src=${preview}
           data-source=${original}
           alt=${description}
         />
       </a>
     </div>`
   }).join('');
}

const imageMarkup = createGalleryMarkup(galleryItems);
refs.galleryBox.insertAdjacentHTML('beforeend', imageMarkup);


let instance = basicLightbox.create(`
<img class = 'modal__img' src='' width="800" height="600">
`);

function onGalleryBoxClick(evt){
   evt.preventDefault()
   if(!evt.target.classList.contains('gallery__image')){
       return;
   }
   instance.show()
   document.querySelector('.modal__img').src = evt.target.dataset.source;
    
};

refs.galleryBox.addEventListener('click', onGalleryBoxClick);

document.querySelector('body').addEventListener('keydown', event => {
    event.preventDefault();
  
    if (event.key === "Escape") {
      instance.close();
    } else {return}
  })


