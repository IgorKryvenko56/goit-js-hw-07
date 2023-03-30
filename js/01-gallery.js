import { galleryItems } from './gallery-items.js';
// Change code below this line
// 

 const gallery = document.querySelector('.gallery');
 const imgs = galleryItems.map(item => `
 <li class='gallery__item'>
 <a class='gallery__link' href='${item.original}'>
 <img class='gallery__image' src='${item.preview}'
 data-source='${item.original}' alt='${item.description}' /></a>
 </li>`).join('');

 gallery.insertAdjacentHTML('beforeend', imgs);
 gallery.addEventListener('click', (evt) => {
   evt.preventDefault();
   if (evt.target.classList.contains('gallery_image')) {
      const imgSrc = evt.target.dataset.source;
      console.log(imgSrc);
   }
 });



//  import * as basicLightbox from 'basiclightbox';
 const instance = basicLightbox.create(
   `<img src="" width="800" height="600">`, {
      onShow: (instance) => {
          gallery.addEventListener("keydown", onEscKeyPress);
          console.log("open");
       },
     onClose: (instance) => {
          gallery.removeEventListener("keydown", onEscKeyPress);
          console.log("close");
       },
   });

  const clickOnImage = (evt) => {
       evt.preventDefault();
  const imgSrc = evt.target.dataset.source;
      if (imgSrc) {
        instance.element().querySelector("img").src = imgSrc;
           instance.show();
       }
       return;
   };

   const onEscKeyPress = (evt) => {
       console.log(evt);
      const ESC_KEY_CODE = "Escape";
       const IsEscKeY = evt.code === ESC_KEY_CODE;
       if (IsEscKeY) {
          instance.close();
       }
   };

gallery.addEventListener("click", clickOnImage);









