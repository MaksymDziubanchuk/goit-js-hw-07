import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    galleryBox: document.querySelector('.gallery'),
    documetnBody: document.querySelector('body'),

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

function onGalleryBoxClick(evt){
   evt.preventDefault()
   if(!evt.target.classList.contains('gallery__image')){
       return;
   }
   
   liteBoxCreate(evt.target.dataset.source)
};

function liteBoxCreate(imageLink){
  let instance = basicLightbox.create(`
    <img class = 'modal__img' src='${imageLink}' 
    width="800" height="600">`, 
    {onShow: (instance) => 
      {refs.documetnBody.addEventListener('keydown', closeLigthBoxEcs)}, 
      onClose: (instance) => 
      {refs.documetnBody.removeEventListener('keydown', closeLigthBoxEcs)}
    });

  instance.show();

  function closeLigthBoxEcs(event) {
    event.preventDefault();
      
    if (event.key === "Escape") {
      instance.close();
     
    } else return
   };
  
 };

refs.galleryBox.addEventListener('click', onGalleryBoxClick);


  
  
