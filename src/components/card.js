import { 
    openPopup,
    closePopup,
  } from './modal.js';

  import { 
    element,
    elements,
    popUpFormAdd,
    popUpImage,
    popupAbout,
    popupImageZoom,
    popNewLocation,
    nameInput,
    linkInput
  } from '../index.js';

  import {
    addNewCardApi, 
    deleteCardApi,
    putLikeApi,
    deleteLikeApi,
    getInitialCards,
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
          deleteCardApi(cardiD);
          deleteButton.closest('.element').remove();
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
    popupAbout.textContent = item.name;
    });
  return newElement;
  }
  
  //Функция добавления новой карточки при нажатии на кнопку
  function handleAddCard(evt) {
    evt.preventDefault();
    const popup = document.querySelector('.popup_is-opened');
    const button = popup.querySelector('.popup__button');
    button.setAttribute('value', 'Сохранение...')
    addNewCardApi (nameInput.value, linkInput.value)
    .then((item) => {
      const card = createCard(item, item.owner._id);
      elements.prepend(card)
    })
    .finally(() => {
        button.setAttribute('value', 'Сохранить');
        // location.reload()
      });
    evt.target.reset();
    closePopup(popNewLocation);
  };

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
    handleAddCard,
    createCard,
    openPopup
  }
  