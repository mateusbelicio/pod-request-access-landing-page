'use strict';

const form = document.querySelector('.form');
const input = document.querySelector('.form__input');
const message = document.querySelector('.form__message');

const isValidEmail = function (email) {
  const regexEmail = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  return regexEmail.test(email);
};

const setValidation = {
  isError() {
    message.textContent = 'Oops! Please check your email';
    form.dataset.valid = false;
    input.focus();
  },
  isEmpty() {
    message.textContent = 'Oops! Please add your email';
    form.dataset.valid = false;
    input.focus();
  },
  isValid() {
    message.textContent = 'Requested access! Thank you!';
    form.dataset.valid = true;

    setTimeout(() => {
      message.textContent = '';
      form.dataset.valid = false;
      input.value = '';
    }, 1500);
  },
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (input.value === '') {
    setValidation.isEmpty();
    return;
  }

  isValidEmail(input.value) ? setValidation.isValid() : setValidation.isError();
});
