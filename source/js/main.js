const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const bookingForm = document.querySelector('#booking-form');
const buttonSubmit = bookingForm.querySelector('#submit-button');
const inputName = bookingForm.querySelector('#name');
const inputTel = bookingForm.querySelector('#tel');
const inputMail = bookingForm.querySelector('#email');
const inputCheckbox = bookingForm.querySelector('#checkbox');


// Описание логики меню
if (navMain) {
  navMain.classList.remove('main-nav--nojs');
}
if (navToggle) {
  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });
}

const onInputNameChange = () => {
  const valueNameInput = inputName.value;

  if (valueNameInput.length === 0) {
    inputName.setCustomValidity('Пожалуйста введите ваше имя');
  } else {
    inputName.setCustomValidity('');
  }

  inputName.reportValidity();
};

const onInputTelChange = () => {
  const valueTelInput = inputTel.value;

  if (valueTelInput.length === 0) {
    inputTel.setCustomValidity('Пожалуйста введите ваш номер телефона, пример: 88005553535');
  } else {
    inputTel.setCustomValidity('');
  }

  inputTel.reportValidity('');
};

const onInputMailChange = () => {
  const valueMailInput = inputMail.value;

  if (valueMailInput.length === 0) {
    inputMail.setCustomValidity('Пожалуйста введите вашу почту, пример: example@gmail.com');
  } else {
    inputMail.setCustomValidity('');
  }

  inputMail.reportValidity();
};

const onInputCheckboxChange = () => {
  if (inputCheckbox.checked === false) {
    buttonSubmit.disabled = true;
  } else {
    buttonSubmit.disabled = false;
  }
};

const addFormListeners = () => {
  if (inputName) {
    inputName.addEventListener('change', onInputNameChange);
  }
  if (inputTel) {
    inputTel.addEventListener('change', onInputTelChange);
  }
  if (inputMail) {
    inputMail.addEventListener('change', onInputMailChange);
  }
  if (inputCheckbox) {
    inputCheckbox.addEventListener('change', onInputCheckboxChange);
  }
};

addFormListeners();
