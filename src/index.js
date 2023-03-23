import './pages/index.css';

import { 
  enableValidation,
} from './components/validate.js';

import { 
  addCard,
  createCard
} from './components/card.js';

import { 
  openPopup,
  closePopup, 
  handleEscPopup
} from './components/modal.js';

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
export const profileUser = document.querySelector('.profile__title');
export const profileAbout = document.querySelector('.profile__subtitle');
const popUpEdit = document.querySelector('#edit-profile');
export const popNewLocation = document.querySelector('#new-location');
const popUpFormEdit = document.querySelector('[name="edit_form"]');
export const popUpFormAdd = document.querySelector('[name="add_form"]');
export const popUpImage = document.querySelector('#popup__image');
export const elements = document.querySelector('.elements__list');
export const element = document.querySelector('#element-template').content;
export const popupImageZoom = document.querySelector('.popup__image');
export const popupAbout = document.querySelector('.popup__about');
const closeButtons = document.querySelectorAll('.popup__button-close');
export const user = popUpFormEdit.querySelector('[name="firstname"]');
export const about = popUpFormEdit.querySelector('[name="subtitle"]');

// Вызов функции проверки на валидность форм
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__text_error_visible'
});

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//Функция изменения заголовка страницы
function changePopup(evt) {
    evt.preventDefault();
    profileUser.textContent = user.value;
    profileAbout.textContent = about.value;
    closePopup(popUpEdit);
  }

//Закрытие попапа нажатием на overlay
const closePopupOverlay = document.querySelectorAll('.popup');
closePopupOverlay.forEach((overlay) => {
  overlay.addEventListener('click', function (evt) {
  if(!evt.target.closest('.popup__container')) {
    closePopup(overlay);
  }
  });
});


initialCards.forEach(function (item) {
    const card = createCard(item);
    elements.append(card);
});


// Обработчики событий
editButton.addEventListener('click', () => {
  openPopup(popUpEdit);
});

addButton.addEventListener('click', () => {
  openPopup(popNewLocation);
});

popUpFormEdit.addEventListener('submit', changePopup);
popUpFormAdd.addEventListener('submit', addCard);

//Закрытие попапа нажатием на close button
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});