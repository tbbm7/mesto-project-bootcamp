import { 
    openPopup,
  } from './modal.js';

  import { 
    element,
    popUpImage,
    popupAbout,
    popupImageZoom,
  } from '../index.js';

  import {
    deleteCardApi,
    putLikeApi,
    deleteLikeApi,
  } from './api.js';


// Функция создания карточки
function createCard(item, user_id) {
    const newElement = element.querySelector('.element').cloneNode(true);
    const likeButton = newElement.querySelector('.element__button-like');
    const deleteButton = newElement.querySelector('.element__delete');
    const imageButton = newElement.querySelector('.element__image');
    const likeNumber = newElement.querySelector('.element__like-number')
    imageButton.src = item.link;
    imageButton.alt = item.name;
    const userId = user_id;
    const itemOwned= item.owner._id;
    const cardiD = item._id;
    const likes = item.likes;
    likeNumber.textContent = likes.length;
    newElement.querySelector('.element__title').textContent = item.name;
    
    likeButton.addEventListener('click', function (evt) {
      toggleLikeButton(likeNumber, likeButton, cardiD)
    });

    if ( itemOwned !==userId ) {
        deleteButton.classList.add('button_nonactive')
    }
    else {
        deleteButton.addEventListener('click', function (evt) {
            deleteCardApi(cardiD)
            .then((item) => {
              deleteButton.closest('.element').remove();
            })
            .catch((err) => {
              console.log(err);
          }); 
        });
    };
    likes.forEach(likeElement => {
        if (likeElement._id == userId) {
            likeButton.classList.add('button_active');
        }
    });
    imageButton.addEventListener('click', function (evt) {
      openPopup(popUpImage);
      const imageElement = imageButton;
      popupImageZoom.setAttribute('src', imageElement.src);
      popupImageZoom.setAttribute('alt', imageElement.alt);
      popUpImage.classList.add('popup__image_appearance');
      popupAbout.textContent = item.name;
      });
    return newElement;
  }

// Функция отображения колличества лайков на карточках
function toggleLikeButton(likeNumber ,button, cardiD) {
  if (button.classList.contains('button_active')) {
    deleteLikeApi(cardiD)
    .then((res) => {
        likeNumber.textContent = res.likes.length;
        button.classList.remove('button_active');
      })
    .catch((err) => {
        console.log(err);
    }); 
  }
  else {
    putLikeApi(cardiD)
    .then((res) => {
        likeNumber.textContent = res.likes.length;
        button.classList.add('button_active');
      })
    .catch((err) => {
        console.log(err);
    }); 
  }
}

export {

  createCard,
  openPopup
}