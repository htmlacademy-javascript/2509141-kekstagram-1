import { isEscapeKey } from './util.js';


const input = document.querySelector('#upload-file');
const modal = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body'); // DRY
const closeBtn = document.querySelector('#upload-cancel');


const hide = () => {
  modal.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  input.value = '';
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    hide();
  }
}

const openModal = () => {
  modal.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
};

const activateModal = () => {
  closeBtn.addEventListener('click', hide);
  input.addEventListener('change', openModal);
};

activateModal();
openModal(); // Временно
