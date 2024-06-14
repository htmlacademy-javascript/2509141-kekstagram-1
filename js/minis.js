import { openModal } from './modal/bigpic.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { showFilters } from './filters.js';


const template = document
  .querySelector('#picture')
  .content
  .querySelector('.picture');


const createPicture = (picture) => {
  const a = template.cloneNode(true);

  const img = a.querySelector('.picture__img');
  const likes = a.querySelector('.picture__likes');
  const comments = a.querySelector('.picture__comments');

  img.src = picture.url;
  likes.textContent = picture.likes;
  comments.textContent = picture.comments.length;

  a.addEventListener('click', () => openModal(picture));

  return a;
};

const createPictureFragment = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    picture = createPicture(picture);
    fragment.append(picture);
  });

  return fragment;
};


const clearMinis = () => {
  const minis = document.querySelectorAll('.picture');
  minis.forEach((picture) => picture.remove());
};

const fill = (pictures) => {
  const pictureFragment = createPictureFragment(pictures);
  const pictureContainer = document.querySelector('.pictures');

  pictureContainer.append(pictureFragment);
};

const reFill = (pictures) => {
  clearMinis();
  fill(pictures);
};


const setPictures = (pictures) => {
  fill(pictures);
  showFilters(reFill, pictures);
};


const loadPictures = () =>
  getData()
    .then(setPictures)
    .catch((errorText) => showAlert(errorText));


export { loadPictures };
