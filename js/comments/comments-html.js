import { createCommentElement } from './comment-html.js';


const COMMENTS_LOAD_QUANTITY = 5;


const modal = document.querySelector('.big-picture');
const loadCommentsBtn = modal.querySelector('.comments-loader');
const shownComments = modal.querySelector('.social__comments');


const createCommentElementsCollection = (comments) => {
  const fragment = document.createDocumentFragment();

  const appendElement = (comment) => {
    comment = createCommentElement(comment);
    fragment.append(comment);
  };

  comments.forEach((comment) => appendElement(comment));

  return fragment;
};

const setLoadCommentsBtnVisibility = (shownCommentsCount) => {
  if (shownCommentsCount === 0) {
    loadCommentsBtn.classList.add('hidden');
  } else {
    loadCommentsBtn.classList.remove('hidden');
  }
};

const createCommentsPortion = (comments) => {
  const fragment = document.createDocumentFragment();

  let maxCount = Math.min(comments.length, COMMENTS_LOAD_QUANTITY);
  while (maxCount > 0) {
    fragment.append(comments.item(0));
    maxCount--;
  }

  return fragment;
};

const createCommentLoader = (comments) => {
  shownComments.innerHTML = '';

  comments = createCommentElementsCollection(comments).children;

  return () => {
    const fragment = createCommentsPortion(comments);
    shownComments.append(fragment);

    setLoadCommentsBtnVisibility(comments.length);
  };
};
let loadNextPartOfCommentElements;

const setCommentsCount = () => {
  const currentCount = modal.querySelector('.social__comment-count').childNodes[0];
  currentCount.textContent = `${shownComments.children.length} из `;
};


const onLoadCommentsBtnClick = () => {
  loadNextPartOfCommentElements();
  setCommentsCount();
};


const setComments = (comments) => {
  modal.querySelector('.comments-count').textContent = comments.length;

  loadNextPartOfCommentElements = createCommentLoader(comments);
  loadCommentsBtn.addEventListener('click', onLoadCommentsBtnClick);
  loadCommentsBtn.click();
};


const clearLoadCommentsBtn = () =>
  loadCommentsBtn.removeEventListener('click', onLoadCommentsBtnClick);


export { clearLoadCommentsBtn, setComments };
