import { showBig } from './modal/big-picture.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { showFilters } from './filters.js';


const pictureContainer = document.querySelector('.pictures');
const template = document
  .querySelector('#picture')
  .content
  .querySelector('.picture');


const createThumbnail = ({ id, url, description, likes, comments }) => {
  const a = template.cloneNode(true);

  const img = a.querySelector('.picture__img');
  const likesCounter = a.querySelector('.picture__likes');
  const commentsCounter = a.querySelector('.picture__comments');

  a.dataset.id = id;
  img.src = url;
  img.alt = description;
  likesCounter.textContent = likes;
  commentsCounter.textContent = comments.length;

  return a;
};

const createThumbnailsFragment = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });

  return fragment;
};


const clearThumbnails = () => {
  const thumbnail = document.querySelectorAll('.picture');
  thumbnail.forEach((picture) => picture.remove());
};

const fill = (pictures) => {
  const pictureFragment = createThumbnailsFragment(pictures);
  pictureContainer.append(pictureFragment);
};

const reFill = (pictures) => {
  clearThumbnails();
  fill(pictures);
};


const onThumbnailClick = (evt, pictures) => {
  const thumbnail = evt.target.closest('[data-id]');

  const isMissed = thumbnail === null;
  if (isMissed) {
    return;
  }

  const id = Number(thumbnail.dataset.id);
  const picture = pictures.find(
    (item) => item.id === id
  );

  showBig(picture);
};

const setPictures = (pictures) => {
  pictureContainer.addEventListener('click', (evt) => onThumbnailClick(evt, pictures));
  fill(pictures);
  showFilters(reFill, pictures);
};


const loadPictures = () =>
  getData()
    .then(setPictures)
    .catch((err) => showAlert(err.message));


export { loadPictures };
