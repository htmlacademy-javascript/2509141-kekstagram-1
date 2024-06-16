import { createEscListener, hideModal, showModal } from './visibility-common.js';
import { addSubmitHandler } from '../validation/validation.js';
import { resetScale } from '../scale-control.js';
import { setDefaultEffect } from '../effects/selection.js';
import { resetValidation } from '../validation/validation.js';


const FILE_TYPES = ['jpg', 'jpeg', 'png'];


const form = document.querySelector('.img-upload__form');
const input = form.querySelector('#upload-file');
const modal = form.querySelector('.img-upload__overlay');
const preview = modal.querySelector('.img-upload__preview > img');


const escListener = createEscListener(hide);


const reset = () => {
  form.reset();
  resetValidation();
  setDefaultEffect();
};

function hide () {
  hideModal(modal, escListener);
  reset();
}

const openModal = () => {
  showModal(modal, escListener);
  resetScale();
};

const disableEscOnFocus = (selector) =>
  modal.querySelector(selector).addEventListener('keydown', (evt) => evt.stopPropagation());


const changePreview = () => {
  const file = input.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((type) => fileName.endsWith(type));

  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
};

const onInputChange = () => {
  changePreview();
  openModal();
};


const initEditPictureModal = () => {
  const closeBtn = document.querySelector('#upload-cancel');

  closeBtn.addEventListener('click', () => hide());
  input.addEventListener('change', onInputChange);
  ['.text__hashtags', '.text__description'].forEach(disableEscOnFocus);
  addSubmitHandler(hide);
};


export { initEditPictureModal };
