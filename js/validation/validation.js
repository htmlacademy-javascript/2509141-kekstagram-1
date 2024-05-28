import { showResultAlert } from '../modal/result-alert.js';
import { validateHashtags, validateDescription } from './validation-rules.js';
import { sendData } from '../api.js';


const form = document.querySelector('.img-upload__form');

let pristine;


const createPristine = () => {
  const config = {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
  };

  return new Pristine(form, config, false);
};

const addValidators = () => {
  pristine.addValidator(
    form.querySelector('.text__description'),
    validateDescription
  );

  pristine.addValidator(
    form.querySelector('.text__hashtags'),
    validateHashtags
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


const initValidation = () => {
  pristine = createPristine();
  addValidators();
};


export { initValidation, addSubmitHandler };
