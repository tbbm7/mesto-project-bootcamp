// Начальные настройки API
const config = {
    baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-6',
    headers: {
      authorization: '740e5163-c9a1-46d5-933d-03893aa484e5',
      'Content-Type': 'application/json'
    }
  }


// //Обработка базового ответа с сервера
function handleBasicResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}


// Функция запроса информации о картачках
const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers
    })
    .then((res) => {
        return handleBasicResponse(res);
    });
} 

// PATCH запрос для редактирования профиля
const editProfileData = (nameProfile, aboutProfile) => {
    return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
        name: nameProfile,
        about: aboutProfile
    })
    })
    .then((res) => {
        return handleBasicResponse(res);
    });
}

// Функция запроса информации о пользователе
const getProfileData = () => {
    return fetch(`${config.baseUrl}/users/me`, {
      headers: config.headers,
    })
    .then((res) => {
        return handleBasicResponse(res);
    });
}


// POST запрос на добавление карточки
const addNewCardApi = (nameCard, urlCard) => {
    return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
        name: nameCard,
        link: urlCard
    })
    })
    .then((res) => {
        return handleBasicResponse(res);
    });
}


// DELETE запрос на удаление карточки
const deleteCardApi = (cardId) => {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
    })
    .then((res) => {
        return handleBasicResponse(res);
    });
}

// Постановка лайка
const putLikeApi = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers,
    })
    .then((res) => {
        return handleBasicResponse(res);
    });
}

// Удаление лайка
const deleteLikeApi = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
    })
    .then((res) => {
        return handleBasicResponse(res);
    })
}

// Функция PATCH запроса на изменение аватара пользователя
const editAvatarApi = (linkAvatar) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
        avatar: linkAvatar
    })
    })
    .then((res) => {
        return handleBasicResponse(res);
    });
}

export {
    config,
    getInitialCards,
    editProfileData,
    getProfileData,
    addNewCardApi,
    deleteCardApi,
    putLikeApi,
    deleteLikeApi,
    editAvatarApi
  }
