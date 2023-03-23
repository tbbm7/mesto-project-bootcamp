import { 
    user,
    profileUser,
    about,
    profileAbout
  } from '../index.js';

//Функция закрытия попапа кликом на оверлей
function handleEscPopup(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  }
}

//  Функция открытия попапа
 function openPopup (popUp) {
  popUp.classList.add('popup_is-opened');
  user.value = profileUser.textContent;
  about.value = profileAbout.textContent;
  document.addEventListener('keydown', handleEscPopup);
 }

 //Функция закрытия попапа
function closePopup(popUp) {
  popUp.classList.remove('popup_is-opened');
  document.addEventListener('keydown', handleEscPopup);
  }

export {
    openPopup,
    closePopup,
    handleEscPopup
  }