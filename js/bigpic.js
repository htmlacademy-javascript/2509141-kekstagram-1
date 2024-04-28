import { isEscapeKey } from './util.js';
import { createCommentElementsCollection } from './comments-html.js';

const COMMENTS_QUANTITY = 5;

const modal = document.querySelector('.big-picture');
const body = document.querySelector('body');
const closeBtn = modal.querySelector('.big-picture__cancel');
const loadCommentsBtn = modal.querySelector('.comments-loader');
const allCommentsCount = modal.querySelector('.comments-count');
const shownComments = modal.querySelector('.social__comments');


const setLoadCommentsBtnVisibility = (shownCommentsCount) => {
  if (shownCommentsCount === 0) {
    loadCommentsBtn.classList.add('hidden');
  } else {
    loadCommentsBtn.classList.remove('hidden');
  }
};

// #1 Подобающее использование замыкания?
// Особенно смущает подвешенная заготовка функции loadNextPartOfCommentElements
const createCommentLoader = (comments) => {
  shownComments.innerHTML = '';

  comments = createCommentElementsCollection(comments).children;

  return function () {
    const fragment = document.createDocumentFragment();

    let maxCount = Math.min(comments.length, COMMENTS_QUANTITY);
    while (maxCount > 0) {
      fragment.append(comments.item(0));
      maxCount--;
    }

    shownComments.append(fragment);

    setLoadCommentsBtnVisibility(comments.length);
  };
};
let loadNextPartOfCommentElements;


// #2 Было бы проще и логичнее заменить разметку "5 из <span class="comments-count">125</span> комментариев"
// на "<span class="shown-comments">5</span> из <span class="comments-count">125</span> комментариев"
// А также удалить из разметки два исходных комментария
const setCommentsCount = () => {
  const field = modal.querySelector('.social__comment-count');

  field.innerHTML = `${shownComments.children.length} из `;
  field.append(allCommentsCount);
  field.insertAdjacentText('beforeend', ' комментариев');
};

const setComments = (comments) => {
  allCommentsCount.textContent = comments.length;

  loadNextPartOfCommentElements = createCommentLoader(comments);
  loadCommentsBtn.addEventListener('click', loadNextPartOfCommentElements);
  loadCommentsBtn.addEventListener('click', setCommentsCount);
  loadCommentsBtn.click();
};


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

  loadCommentsBtn.removeEventListener('click', setCommentsCount);
  loadCommentsBtn.removeEventListener('click', loadNextPartOfCommentElements);
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
