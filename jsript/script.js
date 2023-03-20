const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const profileUser = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const popUpEdit = document.querySelector('#edit-profile');
const popNewLocation = document.querySelector('#new-location');
const popUpCloseEdit = document.querySelector('#popup__button-close-edit');
const popUpCloseAdd = document.querySelector('#popup__button-close-add');
const popUpSave = document.querySelector('.popup__button');
const popUpFormEdit = document.querySelector('[name="edit_form"]');
const popUpFormAdd = document.querySelector('[name="add_form"]');
const popUpImage = document.querySelector('#popup__image');
const elements = document.querySelector('.elements__list');
const element = document.querySelector('#element-template').content;
const likeButton = element.querySelector('.element__button-like');
const deleteButton = element.querySelector('.element__delete');
const popUpCloseImage = document.querySelector('#popup__button-close-image');
const popupImageZoom = document.querySelector('.popup__image');
const popupAbout = document.querySelector('.popup__about');
console.log(popupAbout)

const user = popUpFormEdit.elements[0];
const about = popUpFormEdit.elements[1];



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

//открыть попап
function openPopupEdit() {
    user.value = profileUser.textContent;
    about.value = profileAbout.textContent;
    popUpEdit.classList.add('popup_is-opened');
}

//закрыть попап
function closePopupEdit() {
  popUpEdit.classList.remove('popup_is-opened');
  }

//открыть попап
function openPopupNewLocation() {
    user.value = profileUser.textContent;
    about.value = profileAbout.textContent;
    popNewLocation.classList.add('popup_is-opened');
}

//закрыть попап
function closePopupNewLocation() {
  popNewLocation.classList.remove('popup_is-opened');
  }

function closeImage() {
  popUpImage.classList.remove('popup_is-opened');
  }

//изменение заголовка страницы
function changePopup(evt) {
    evt.preventDefault();
    profileUser.textContent = user.value;
    profileAbout.textContent = about.value;
    closePopupEdit();
  }

//добавление карточек на страницу из списка
function page_cards() {
  initialCards.forEach(function (item) {
    const newElement = element.querySelector('.element').cloneNode(true);
    newElement.querySelector('.element__image').src = item.link;
    newElement.querySelector('.element__title').textContent = item.name;
    const likeButton = newElement.querySelector('.element__button-like');
    likeButton.addEventListener('click', function (evt) {
      evt.target.classList.toggle('button_active');
    });
    const deleteButton = newElement.querySelector('.element__delete');
    deleteButton.addEventListener('click', function (evt) {
      const listElement = evt.target.closest('.element');
      listElement.remove()
    });

    const imageButton = newElement.querySelector('.element__image');
    imageButton.addEventListener('click', function (evt) {
      popUpImage.classList.add('popup_is-opened');
      const imageElement = evt.target.closest('.element__image');
      popupImageZoom.setAttribute('src', imageElement.src);
      popupAbout.textContent =newElement.querySelector('.element__title').textContent;
    });
    elements.append(newElement);
  });
  
}

//добавление новой карточки при нажатии на кнопку
function addCard(evt) {
  evt.preventDefault();
  const newPlaceImg = popUpFormAdd.elements[1];
  const newPlace = popUpFormAdd.elements[0];
  const element = document.querySelector('#element-template').content;
  const newElement = element.querySelector('.element').cloneNode(true);
  newElement.querySelector('.element__image').src = newPlaceImg.value;
  newElement.querySelector('.element__title').textContent = newPlace.value;
  elements.prepend(newElement);
  const likeButton = newElement.querySelector('.element__button-like');
  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('button_active');
  });
  const deleteButton = newElement.querySelector('.element__delete');
  deleteButton.addEventListener('click', function (evt) {
    const listElement = evt.target.closest('.element');
    listElement.remove()
  });
  closePopupNewLocation();
}

// Добавление карточек
page_cards()

// Обработчики событий
editButton.addEventListener('click', openPopupEdit);
popUpCloseEdit.addEventListener('click', closePopupEdit);
popUpFormEdit.addEventListener('submit', changePopup);
addButton.addEventListener('click', openPopupNewLocation);
popUpCloseAdd.addEventListener('click', closePopupNewLocation);
popUpFormAdd.addEventListener('submit', addCard);
popUpCloseImage.addEventListener('click', closeImage);
deleteButton.addEventListener('click', function (evt) {
  const listElement = deleteButton.closest('.element');
  console.log(listElement);
  listElement.remove();
});