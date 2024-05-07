import { isEscapeKey } from './util.js';

const form = document.querySelector('.img-upload__form');
const message = document
  .querySelector('#error')
  .content
  .querySelector('.error')
  .cloneNode(true);

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
}, false);

const hide = () => {
  message.remove();

  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    hide();
  }
}

const onErrorMouseup = (evt) => {
  const container = message.querySelector('.error__inner');
  if (!container.contains(evt.target)) {
    hide();
  }
};

const hashReg = /^#[a-zа-яё0-9]{1, 19}$/i;

const isValidHash = (value) => {
  // #1 Здесь бы удалить все return false кроме, но eslint - no-fallthrough
  // Почему? Достойно ли вообще так использовать switch?
  switch (true) {
    // хэш-тег начинается с символа #
    case (value[0] !== '#'):
      return false;
    // хеш-тег не может состоять только из одной решётки
    case (value === '#'):
      return false;
    // максимальная длина одного хэш-тега 20 символов, включая решётку
    case (value.length > 20):
      return false;
  }
  return true;
};

const isUniqueHash = (hash, index, arr) => {
  // хэш-теги нечувствительны к регистру
  hash = hash.toLowerCase();

  return arr.indexOf(hash) === index;
};

const validateHashCollection = (string) => {
  // хэш-теги разделяются пробелами
  const hashes = string.split(' ');

  // нельзя указать больше пяти хэш-тегов
  if (hashes.length > 5) {
    return false;
  }

  // один и тот же хэш-тег не может быть использован дважды
  const allUnique = hashes.every(isUniqueHash);
  const allValid = hashes.every(isValidHash);

  return allUnique && allValid;
};

const showError = () => {
  const closeBtn = message.querySelector('.error__button');

  closeBtn.addEventListener('click', hide);
  document.addEventListener('mouseup', onErrorMouseup);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('keydown', onDocumentKeydown);


  const body = document.querySelector('body');
  body.append(message);
};

pristine.addValidator(
  form.querySelector('.text__hashtags'),
  validateHashCollection,
  showError
);


const validateDescription = (string) => {
  if (string.length > 140) {
    return false;
  }
};

pristine.addValidator(
  form.querySelector('.text__description'),
  validateDescription,
  showError
);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

export { showError };
