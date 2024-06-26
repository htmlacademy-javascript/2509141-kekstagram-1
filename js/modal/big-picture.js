import { setComments, clearLoadCommentsBtn } from '../comments/comments-html.js';
import { createEscListener, hideModal, showModal } from './visibility-common.js';


const modal = document.querySelector('.big-picture');
const closeBtn = modal.querySelector('.big-picture__cancel');

const escListener = createEscListener(hide);


const setModalContent = ({ url, likes, comments, description }) => {
  modal.querySelector('.big-picture__img').querySelector('img').src = url;

  modal.querySelector('.social__caption').textContent = description;

  modal.querySelector('.likes-count').textContent = likes;

  setComments(comments);
};


function hide () {
  hideModal(modal, escListener);

  clearLoadCommentsBtn();
}

const showBig = (picture) => {
  setModalContent(picture);
  showModal(modal, escListener);
};


const initBigPicture = () =>
  closeBtn.addEventListener('click', () => hide());


export { initBigPicture, showBig };
