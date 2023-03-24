//Функция закрытия попапа кликом на оверлей
function handleEscPopup(evt) {
  const openedPopup = document.querySelector('.popup_is-opened');
  if (openedPopup.classList.contains("popup_is-opened")) {
    if (evt.key === 'Escape') {
    closePopup(openedPopup);
    }
  }
}

//  Функция открытия попапа
 function openPopup (popUp) {
  popUp.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleEscPopup);
 }

 //Функция закрытия попапа
function closePopup(popUp) {
  popUp.classList.remove('popup_is-opened');
  }

export {
    openPopup,
    closePopup,
    handleEscPopup
  }
  