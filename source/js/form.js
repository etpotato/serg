import { sendData } from './api.js';
import isEmail from 'validator/es/lib/isEmail';
import isMobilePhone from 'validator/es/lib/isMobilePhone';

const ErrorMessages = {
  NAME: 'Пожалуйста, представьтесь',
  ADDRESS: 'Пожалуйста, оставьте свои контакты',
  MESSAGE: 'Пожалуйста, опишите что вас беспокоит',
};
const ButtonTexts = {
  DEFAULT: 'Отправить',
  SUCCESS: 'Отправлено!',
};
const SUCCESS_MESSAGE = 'Мы свяжемся с вами в ближайшее время';

const form = document.querySelector('.contact__form');
const inputs = Array.from(form.querySelectorAll('.contact__form-input'));
const nameInput = form.querySelector('#contact-name');
const addressInput = form.querySelector('#contact-address');
const messageInput = form.querySelector('#contact-message');
const submitWrapper = form.querySelector('.contact__form-submit-wrapper');
const submitButton = submitWrapper.querySelector('.contact__form-submit');

// валидация
const showInputInvalid = (input) => {
  const message = document.createElement('span');
  message.classList.add('contact__form-label-invalid');
  input.classList.add('contact__form-input--invalid');
  return message;
}

const showNameInvalid = () => {
  const message = showInputInvalid(nameInput);
  message.textContent = ErrorMessages.NAME;
  nameInput.parentNode.append(message);
};

const showAddressInvalid = () => {
  const message = showInputInvalid(addressInput);
  message.textContent = ErrorMessages.ADDRESS;
  addressInput.parentNode.append(message);
}

const showMessageInvalid = () => {
  const message = showInputInvalid(messageInput);
  message.textContent = ErrorMessages.MESSAGE;
  messageInput.parentNode.append(message);
}

// console.log(nameInput.parentElement.querySelector('.contact__form-label-invalid'));

const hideInputInvalid = (input) => {
  const message = input.parentNode.querySelector('.contact__form-label-invalid');
  if (message) {
    message.remove();
  }
  input.classList.remove('contact__form-input--invalid');
};

const validateName = () => {
  if (nameInput.value === '') {
    return false;
  }

  const isValid = nameInput.value.trim() !== '';

  isValid ? hideInputInvalid(nameInput) : showNameInvalid();

  return isValid;
};

const validateAddress = () => {
  if (addressInput.value === '') {
    return false;
  }

  const isValid = isEmail(addressInput.value) || isMobilePhone(addressInput.value, 'any');

  isValid ? hideInputInvalid(addressInput) : showAddressInvalid();

  return isValid;
};

const validateMessage = () => {
  if (messageInput.value === '') {
    return false;
  }

  const isValid = messageInput.value.trim() !== '';

  isValid ? hideInputInvalid(messageInput) : showMessageInvalid();

  return isValid;
};

const validateForm = () => {
  return validateName() &&
    validateAddress() &&
    validateMessage();
};

// Отправка
const showSuccessMessage = () => {
  const message = document.createElement('p');
  message.classList.add('contact__form-submitted');
  message.textContent = SUCCESS_MESSAGE;
  submitWrapper.append(message);
};

const hideSuccessMessage = () => {
  const message = submitWrapper.querySelector('.contact__form-submitted');
  message.remove();
};

const showSuccessButton = () => {
  submitButton.classList.add('contact__form-submit--success');
  submitButton.textContent = ButtonTexts.SUCCESS;
}

const hideSuccessButton = () => {
  submitButton.classList.remove('contact__form-submit--success');
  submitButton.textContent = ButtonTexts.DEFAULT;
}

const onRepeatedFormClick = () => {
  hideSuccessMessage();
  hideSuccessButton();
  submitButton.disabled = false;
  form.removeEventListener('click', onRepeatedFormClick);
};

const onSuccessSubmit = (responce) => {
  showSuccessMessage();
  showSuccessButton();
  form.reset();
  submitButton.disabled = true;
  form.addEventListener('click', onRepeatedFormClick);

  responce.text().then((text) => {
    const tab = window.open();
    tab.document.write(text);
  });
  // Мы свяжемся с вами в ближайшее время
// Очистить форму
};

const onErrorSubmit = () => {
  // console.log('Произошла ошыбка');
// сохранение в localStorage???
// При отправке данных на сервер произошла ошибка.
};

const onSubmit = (evt) => {
  evt.preventDefault();
  submitButton.blur();
  validateForm() ? (
    sendData(new FormData(evt.target), onSuccessSubmit, onErrorSubmit)
  ) : (
    form.querySelector('.contact__form-input--invalid').focus()
  );
};

inputs.forEach(input => input.required = false);
nameInput.addEventListener('blur', validateName);
addressInput.addEventListener('blur', validateAddress);
messageInput.addEventListener('blur', validateMessage);
form.addEventListener('submit', onSubmit);
