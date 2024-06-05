import { showResultAlert } from '../modal/result-alert.js';
import { validateHashtags, validateDescription } from './validation-rules.js';
import { sendData } from '../api.js';


const form = document.querySelector('.img-upload__form');

let pristine;


const createPristine = () => {
  const config = {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__field-wrapper__error',
    errorClass: 'img-upload__field-wrapper--invalid'
  };

  return new Pristine(form, config, false);
};

const addValidators = () => {
  pristine.addValidator(
    form.querySelector('.text__description'),
    validateDescription,
    'Многа букаф (ˉ﹃ˉ)'
  );

  pristine.addValidator(
    form.querySelector('.text__hashtags'),
    validateHashtags,
    'Неправильно (╯°□°）╯︵ ┻━┻'
  );
};

const addSubmitHandler = (onSuccess) => {

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      const formData = new FormData(evt.target);
      sendData(formData)
        .then(onSuccess)
        .then(() => showResultAlert(true))
        .catch(() => showResultAlert(false));
    }
  });

};


const resetValidation = () =>
  pristine.reset();


const initValidation = () => {
  pristine = createPristine();
  addValidators();
};


export { initValidation, addSubmitHandler, resetValidation };
