import { createEscListener, hideModal, showModal } from './visibility-common.js';


const input = document.querySelector('#upload-file');
const modal = document.querySelector('.img-upload__overlay');

const escListener = createEscListener(hide);

function hide () {
  hideModal(modal, escListener);

  input.value = '';
}

const openModal = () =>
  showModal(modal, escListener);


const disableEscOnFocus = (selector) =>
  modal.querySelector(selector).addEventListener('keydown', (evt) => evt.stopPropagation());


const initEditPhotoModal = () => {
  const closeBtn = document.querySelector('#upload-cancel');

  closeBtn.addEventListener('click', hide);
  input.addEventListener('change', () => openModal());
  ['.text__hashtags', '.text__description'].forEach(disableEscOnFocus);
};


export { initEditPhotoModal };
