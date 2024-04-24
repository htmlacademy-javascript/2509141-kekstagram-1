import { isEscapeKey } from './util.js';
import { createCommentElementsCollection } from './comments-html.js';


const modal = document.querySelector('.big-picture');
const body = document.querySelector('body');


// #1 ==>
// Любое расположение нарушает no-use-before-define
// Вынесение removeEventListener из hide() нарушает DRY
// Использование декларативного объявления нарушает Д5 https://up.htmlacademy.ru/profession/react-js-individual/1/javascript-individual/1/criteries#d5
// (╯°□°）╯︵ ┻━┻
const hide = () => {
  body.classList.remove('modal-open');
  modal.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
};
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault(); // #2 Зачем?
    hide();
  }
};
// <==

const activateCloseBtn = () => {
  const closeBtn = modal.querySelector('.big-picture__cancel');
  closeBtn.addEventListener('click', hide);
};


const adjustModal = () => {
  body.classList.add('modal-open');

  // #3
  // Хорошо ли это?
  // Разве не правильнее было бы каждый раз создавать элемент модального окна с нуля,
  // очищенный он предыдущих данных, а не скрывать уже существующий?
  modal.classList.remove('hidden');

  document.addEventListener('keydown', onDocumentKeydown);
};

const setModalContent = ({ url, likes, comments, description }) => {
  modal.querySelector('.big-picture__img').querySelector('img').src = url;

  modal.querySelector('.likes-count').textContent = likes;

  modal.querySelector('.social__caption').textContent = description;

  modal.querySelector('.comments-count').textContent = comments.length;

  comments = createCommentElementsCollection(comments);
  modal.querySelector('.social__comments').replaceChildren(comments);
};

const openModal = (photo) => {
  setModalContent(photo);
  adjustModal();
};

// #4 Может лучше вынести в другой модуль? В main, например.
// Для большей прозрачности и единообразия.
activateCloseBtn();


export { openModal };
