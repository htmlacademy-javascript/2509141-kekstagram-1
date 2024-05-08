import { createEscTumbler, hideModal, showModal } from './util.js';


const input = document.querySelector('#upload-file');
const modal = document.querySelector('.img-upload__overlay');

const toggleEscHandler = createEscTumbler(hide);

function hide () {
  hideModal(modal, toggleEscHandler);

  input.value = '';
}

const openModal = () =>
  showModal(modal, toggleEscHandler);


const disableEscOnFocus = (selector) =>
  modal.querySelector(selector).addEventListener('keydown', (evt) => evt.stopPropagation());

const activateModal = () => {
  const closeBtn = document.querySelector('#upload-cancel');

  closeBtn.addEventListener('click', hide);
  input.addEventListener('change', () => openModal());
  ['.text__hashtags', '.text__description'].forEach(disableEscOnFocus);
};


activateModal();
