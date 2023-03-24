// Функция, которая добавляет класс с ошибкой
function showInputError (formElement, inputElement, errorMessage, validationSettings) {
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    inputElement.classList.add(validationSettings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationSettings.errorClass);
  };
  
  // Функция, которая удаляет класс с ошибкой
  function hideInputError (formElement, inputElement, validationSettings) {
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    inputElement.classList.remove(validationSettings.inputErrorClass);
    errorElement.classList.remove(validationSettings.errorClass);
    errorElement.textContent = '';
  };
  
  // Функция принимает массив полей
  function hasInvalidInput (inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
    
  }; 
  
  // Функция принимает массив полей ввода
  // и элемент кнопки, состояние которой нужно менять
  function toggleButtonState (inputList, buttonElement, validationSettings) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(validationSettings.inactiveButtonClass);
      buttonElement.addEventListener('click', function (evt) {
          const eventTarget = evt.target;
          eventTarget.setAttribute('disabled', true);
        });
    } else {
      buttonElement.classList.remove(validationSettings.inactiveButtonClass);
      buttonElement.addEventListener('click', function (evt) {
          const eventTarget = evt.target;
          eventTarget.removeAttribute('disabled', true);
        });
    }
  }; 
  
  // Функция проверки поля на валидность
  function isValid (formElement, inputElement, validationSettings) {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, validationSettings);
    } else {
      hideInputError(formElement, inputElement, validationSettings);
    }
  };
  
  // Функция обработчика события input иизменения состояния кнопки
  function setEventListeners (formElement, validationSettings){
    const formElements = formElement.querySelectorAll(validationSettings.inputSelector);
    const inputList = Array.from(formElements);
    const buttonElement = formElement.querySelector(validationSettings.submitButtonSelector);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement, validationSettings);
        toggleButtonState(inputList, buttonElement, validationSettings);
      });
    });
    toggleButtonState(inputList, buttonElement,validationSettings);
  }; 
  
  // Функция проверки всех форм на валидность
  function enableValidation(validationSettings) {
    const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));
    formList.forEach((formElement) => {
      setEventListeners(formElement, validationSettings);
    });
  };
  
  export {
      enableValidation
    }
    