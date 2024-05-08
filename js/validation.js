import { showError } from './modal-validation.js';
import { validateHashtags, validateDescription } from './validation-rules.js';


const form = document.querySelector('.img-upload__form');


const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
}, false);


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


form.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();

  if (!isValid) {
    evt.preventDefault();
  }
});
