import { openModal } from './modal/bigpic.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { showFilters } from './filters.js';


const template = document
  .querySelector('#picture')
  .content
  .querySelector('.picture');


const createPicture = (picData) => {
  const picture = template.cloneNode(true);

  const img = picture.querySelector('.picture__img');
  const likes = picture.querySelector('.picture__likes');
  const comments = picture.querySelector('.picture__comments');

  img.src = picData.url;
  likes.textContent = picData.likes;
  comments.textContent = picData.comments.length;

  picture.addEventListener('click', () => openModal(picData));

  return picture;
};

const createPicFragment = (picsData) => {
  const fragment = document.createDocumentFragment();

  picsData.forEach((pic) => {
    const picture = createPicture(pic);
    fragment.append(picture);
  });

  return fragment;
};


// ??? Есть более эффективный способ, чем удалять каждое изображение по одному?
const clearMinis = () => {
  const minis = document.querySelectorAll('.picture');
  minis.forEach((el) => el.remove());
};

const fill = (pictures) => {
  const picFragment = createPicFragment(pictures);
  const pictureContainer = document.querySelector('.pictures');

  pictureContainer.append(picFragment);
};

const reFill = (pics) => {
  clearMinis();
  fill(pics);
};


const setPictures = (pics) => {
  fill(pics);
  showFilters(reFill, pics);
};


const loadPictures = () =>
  getData()
    .then(setPictures)
    .catch((errorText) => showAlert(errorText));


export { loadPictures };
