import './pages/index.css';

import { 
  enableValidation,
} from './components/validate.js';

import { 
  createCard
} from './components/card.js';

import { 
  openPopup,
  closePopup, 
} from './components/modal.js';

import {
  getInitialCards,
  editProfileData,
  getProfileData,
  editAvatarApi,
  addNewCardApi
} from './components/api.js';

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const profileUser = document.querySelector('.profile__title');
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
export const nameInput = popUpFormAdd.querySelector('[name="title"]');
export const linkInput = popUpFormAdd.querySelector('[name="link"]');
export const likesNumber = document.querySelector('.elements__list');

export const popupAvatar = document.querySelector('#edit_avatar');
export const popupFormAvatar = document.querySelector('[name="avatar_edit_form"]');
const avatarButton = document.querySelector('.profile__edit_avatar');
export const profileAvatar = document.querySelector('.profile__subtitle');
const avatarLink = popupFormAvatar.querySelector('[name="avatar"]');
const headerAvatar  = document.querySelector('.profile__avatar');

// Вызов функции проверки на валидность форм
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__text_error_visible'
});

//Функция изменения заголовка страницы
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    const button = evt.submitter;
    button.setAttribute('value', 'Сохранение...')
    editProfileData (user.value, about.value)
    .then((response) => {
      profileUser.textContent = response.name;
      profileAbout.textContent = response.about;
      closePopup(popUpEdit)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      button.setAttribute('value', 'Сохранить');
    });
  }

//Функция изменения аватара
function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  const button = evt.submitter;
  button.setAttribute('value', 'Сохранение...')
  editAvatarApi (avatarLink.value)
  .then((response) => {
    headerAvatar.setAttribute('src', response.avatar);
    evt.target.reset();
    closePopup(popupAvatar);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    button.setAttribute('value', 'Сохранить');
    button.classList.add('popup__button_disabled')
    button.setAttribute('disabled', true);
  });
}

  //Функция добавления новой карточки при нажатии на кнопку
function handleAddCard(evt) {
    evt.preventDefault();
    const button = evt.submitter
    button.setAttribute('value', 'Сохранение...')
    addNewCardApi (nameInput.value, linkInput.value)
    .then((item) => {
      const card = createCard(item, item.owner._id);
      elements.prepend(card);
      evt.target.reset();
      closePopup(popNewLocation);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      button.setAttribute('value', 'Создать');
      button.classList.add('popup__button_disabled')
      button.setAttribute('disabled', true);
      });
  };

// Функция отображения карточек на странице при запросе api 
export function addCardsFromApi(cards, used_id) {
  cards.forEach(function (item) {
    const card = createCard(item, used_id);
    elements.append(card);
    });
}

// Функция изменения информации профиля на странице
function fillFormFromApi(response) {
  profileUser.textContent = response.name;
  profileAbout.textContent = response.about;
  headerAvatar.setAttribute('src', response.avatar);
}

// Обработчики событий
editButton.addEventListener('click', () => {
  user.value = profileUser.textContent;
  about.value = profileAbout.textContent;
  openPopup(popUpEdit);
});

addButton.addEventListener('click', () => {
  openPopup(popNewLocation);
});

avatarButton.addEventListener('click', () => {
  openPopup(popupAvatar);
});

popUpFormEdit.addEventListener('submit', handleProfileFormSubmit);
popUpFormAdd.addEventListener('submit', handleAddCard);
popupFormAvatar.addEventListener('submit', handleAvatarFormSubmit);

//Закрытие попапа нажатием на close button
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//Закрытие попапа нажатием на overlay
const popupList = document.querySelectorAll('.popup');
popupList.forEach((overlay) => {
  overlay.addEventListener('click', function (evt) {
  if (evt.target.classList.contains("popup_is-opened")) {
    closePopup(overlay);
  }
  });
});

Promise.all([
  getProfileData(),
  getInitialCards(),
  ])
  .then((response) => {
    fillFormFromApi(response[0]);
    addCardsFromApi(response[1], response[0]._id);
  })
  .catch((err) => {
    console.log(err);
  }); 
