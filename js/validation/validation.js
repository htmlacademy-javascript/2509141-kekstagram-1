import { showError } from '../modal/validation-error.js';
import { validateHashtags, validateDescription } from './validation-rules.js';


const form = document.querySelector('.img-upload__form');


const createPristine = () => {
  const config = {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
  };

  return new Pristine(form, config, false);
};

const addValidators = (pristine) => {
  pristine.addValidator(
    form.querySelector('.text__description'),
    validateDescription,
    showError
  );

  pristine.addValidator(
    form.querySelector('.text__hashtags'),
    validateHashtags,
    showError
  );
};

const addSubmitHandler = (pristine) => {

  form.addEventListener('submit', (evt) => {
    const isValid = pristine.validate();

    if (!isValid) {
      evt.preventDefault();
    }
  });

};


const initValidation = () => {
  const pristine = createPristine();
  addValidators(pristine);
  addSubmitHandler(pristine);
};


export { initValidation };
