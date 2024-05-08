import { createEscTumbler, hideModal, showModal } from './util.js';
import { setComments, clearLoadCommentsBtn } from './comments-html.js';


const modal = document.querySelector('.big-picture');
const closeBtn = modal.querySelector('.big-picture__cancel');

const toggleEscHandler = createEscTumbler(hide);


const setModalContent = ({ url, likes, comments, description }) => {
  modal.querySelector('.big-picture__img').querySelector('img').src = url;

  modal.querySelector('.social__caption').textContent = description;

  modal.querySelector('.likes-count').textContent = likes;

  setComments(comments);
};


function hide () {
  hideModal(modal, toggleEscHandler);

  closeBtn.removeEventListener('click', hide);

  clearLoadCommentsBtn();
}

const openModal = (photo) => {
  setModalContent(photo);
  showModal(modal, toggleEscHandler);

  closeBtn.addEventListener('click', hide);
};


export { openModal };
