import { isEscapeKey, isUnique } from './util.js';

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


const isValidhashtag = (value) =>
  (value === '') ? (true) : (/^#[a-zа-яё0-9]{1, 19}$/i).test(value);

const validateHashtagCollection = (string) => {
  // хэш-теги нечувствительны к регистру
  string = string.toLowerCase();

  // хэш-теги разделяются пробелами
  const hashtags = string.split(' ');

  // нельзя указать больше пяти хэш-тегов
  if (hashtags.length > 5) {
    return false;
  }

  // один и тот же хэш-тег не может быть использован дважды
  const allUnique = hashtags.every(isUnique);
  const allValid = hashtags.every(isValidhashtag);

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
  validateHashtagCollection,
  showError
);


const validateDescription = (string) =>
  string.length <= 140;

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
