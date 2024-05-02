import { isEscapeKey } from './util.js';
import { setComments, clearLoadCommentsBtn } from './comments-html.js';


const modal = document.querySelector('.big-picture');
const body = document.querySelector('body');
const closeBtn = modal.querySelector('.big-picture__cancel');


const setModalContent = ({ url, likes, comments, description }) => {
  modal.querySelector('.big-picture__img').querySelector('img').src = url;

  modal.querySelector('.social__caption').textContent = description;

  modal.querySelector('.likes-count').textContent = likes;

  setComments(comments);
};


const hide = () => {
  body.classList.remove('modal-open');
  modal.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
  closeBtn.removeEventListener('click', hide);

  clearLoadCommentsBtn();
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    hide();
  }
}

const adjustModal = () => {
  body.classList.add('modal-open');

  modal.classList.remove('hidden');

  document.addEventListener('keydown', onDocumentKeydown);
  closeBtn.addEventListener('click', hide);
};


const openModal = (photo) => {
  setModalContent(photo);
  adjustModal();
};


export { openModal };
