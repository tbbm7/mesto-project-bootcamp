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
    popNewLocation
  } from '../index.js';

// Функция создания карточки
function createCard(item) {
    const newElement = element.querySelector('.element').cloneNode(true);
    const likeButton = newElement.querySelector('.element__button-like');
    const deleteButton = newElement.querySelector('.element__delete');
    const imageButton = newElement.querySelector('.element__image');
    newElement.querySelector('.element__image').src = item.link;
    newElement.querySelector('.element__image').alt = item.name;
    newElement.querySelector('.element__title').textContent = item.name;
    
    likeButton.addEventListener('click', function (evt) {
      evt.target.classList.toggle('button_active');
    });
  
      deleteButton.addEventListener('click', function (evt) {
        const listElement = evt.target.closest('.element');
        listElement.remove()
      });
  
    imageButton.addEventListener('click', function (evt) {
        popUpImage.classList.add('popup_is-opened');
      const imageElement = evt.target.closest('.element__image');
      popupImageZoom.setAttribute('src', imageElement.src);
      popupAbout.textContent =newElement.querySelector('.element__title').textContent;
      });
  
    return newElement;
  }
  
  //Функция добавления новой карточки при нажатии на кнопку
  function addCard(evt) {
    evt.preventDefault();
    const newPlace = {
      name : popUpFormAdd.querySelector('[name="title"]').value, 
      link : popUpFormAdd.querySelector('[name="link"]').value
    };
    const card = createCard(newPlace);
    elements.prepend(card);
    closePopup(popNewLocation);
  };

  export {
    addCard,
    createCard,
    openPopup
  }