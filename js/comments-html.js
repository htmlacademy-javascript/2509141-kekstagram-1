import { assembleElements } from './util.js';


const createCommentContainer = () => {
  const li = document.createElement('li');
  li.classList.add('social__comment');

  return li;
};

const createAvatar = ({ avatar, name }) => {
  const img = document.createElement('img');

  img.classList.add('social__picture');
  img.src = avatar;
  img.alt = name;
  img.width = img.height = 35;

  return img;
};

const createTextElement = (message) => {
  const p = document.createElement('p');
  p.classList.add('social__text');
  p.textContent = message;

  return p;
};

const createCommentElement = (comment) => {
  const li = createCommentContainer();
  const img = createAvatar(comment);
  const p = createTextElement(comment.message);

  assembleElements(li, img, p);

  return li;
};

const createCommentElementsCollection = (comments) => {
  const fragment = document.createDocumentFragment();

  const appendElement = (comment) => {
    comment = createCommentElement(comment);
    fragment.append(comment);
  };

  comments.forEach((comment) => appendElement(comment));

  return fragment;
};


export { createCommentElementsCollection };
