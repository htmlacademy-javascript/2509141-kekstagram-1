import { createEscListener, hideModal, showModal } from './visibility-common.js';
import { addSubmitHandler } from '../validation/validation.js';
import { resetScale } from '../scale-control.js';
import { setDefaultEffect } from '../effects/selection.js';


const form = document.querySelector('.img-upload__form');
const input = form.querySelector('#upload-file');
const modal = form.querySelector('.img-upload__overlay');

const escListener = createEscListener(hide);


const reset = () => {
  form.reset();
  setDefaultEffect();
};

function hide () {
  hideModal(modal, escListener);
  reset();
}

const openModal = () => {
  showModal(modal, escListener);

  // ??? Как из js установить значение по умолчанию, чтобы value не сбрасывалось вместе с формой?
  resetScale();
};

const disableEscOnFocus = (selector) =>
  modal.querySelector(selector).addEventListener('keydown', (evt) => evt.stopPropagation());


const initEditPhotoModal = () => {
  const closeBtn = document.querySelector('#upload-cancel');

  closeBtn.addEventListener('click', hide);
  input.addEventListener('change', () => openModal());
  ['.text__hashtags', '.text__description'].forEach(disableEscOnFocus);
  addSubmitHandler(hide);
};


export { initEditPhotoModal };
