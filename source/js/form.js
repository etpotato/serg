import { sendData } from './api.js';
import isEmail from 'validator/es/lib/isEmail';

const PHONE_REGEX = /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{2}[\s-]?([0-9][\s-]?){3}[0-9]{2}$/;
const ERROR_TIMEOUT = 5000;
const ERROR_MESSAGE = 'Ошибка отправки данных. Попробуйте еще раз.';
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
  input.classList.add('contact__form-input--invalid');
  const message = document.createElement('span');
  message.classList.add('contact__form-label-invalid');
  message.textContent = input.dataset.error;
  input.parentNode.append(message);
}

const hideInputInvalid = (input) => {
  const message = input.parentNode.querySelector('.contact__form-label-invalid');
  if (message) {
    message.remove();
  }
  input.classList.remove('contact__form-input--invalid');
};

const validateName = () => {
  const value = nameInput.value;
  if (value === '') {
    return false;
  }

  const isValid = value.trim() !== '';

  isValid ? hideInputInvalid(nameInput) : showInputInvalid(nameInput);

  return isValid;
};

const validateAddress = () => {
  const value = addressInput.value;
  if (value === '') {
    return false;
  }

  const isValid = isEmail(value) || PHONE_REGEX.test(value.trim());

  isValid ? hideInputInvalid(addressInput) : showInputInvalid(addressInput);

  return isValid;
};

const validateMessage = () => {
  const value = messageInput.value;
  if (value === '') {
    return false;
  }

  const isValid = value.trim() !== '';

  isValid ? hideInputInvalid(messageInput) : showInputInvalid(messageInput);

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
};

const onErrorSubmit = () => {
  const errorMessage = document.createElement('p');
  errorMessage.classList.add('contact__form-submit-error');
  errorMessage.textContent = ERROR_MESSAGE;
  form.append(errorMessage);

  setTimeout(() => {
    errorMessage.remove();
  }, ERROR_TIMEOUT);
};

const onSubmit = (evt) => {
  evt.preventDefault();
  submitButton.blur();
  if (validateForm()) {
    sendData(new FormData(evt.target), onSuccessSubmit, onErrorSubmit)
  } else {
    const emptyInputs = Array.from(form.querySelectorAll('input:placeholder-shown'));
    emptyInputs.forEach(input => showInputInvalid(input));
    form.querySelector('.contact__form-input--invalid').focus();
  }

};

inputs.forEach(input => input.required = false);
nameInput.addEventListener('blur', validateName);
addressInput.addEventListener('blur', validateAddress);
messageInput.addEventListener('blur', validateMessage);
form.addEventListener('submit', onSubmit);
