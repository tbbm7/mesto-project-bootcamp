const editButton = document.querySelector('.profile__edit-button');
const profileUser = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const popUp = document.querySelector('.popup');
const popUpClose = document.querySelector('.popup__button-close');
const popUpSave = document.querySelector('.popup__button');
const popUpForm = document.querySelector('.popup__form');
const user = popUpForm.elements[0];
const about = popUpForm.elements[1];

function openPopup() {
    popUp.classList.add('popup_is-opened');
}

function closePopup() {
    popUp.classList.remove('popup_is-opened');
  }

function changePopup(evt) {
    evt.preventDefault();
    profileUser.innerText = user.value;
    profileAbout.innerText = about.value;
    closePopup();
  }

editButton.addEventListener('click', openPopup);
popUpClose.addEventListener('click', closePopup);
popUpSave.addEventListener('click', changePopup);
