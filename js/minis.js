import { openModal } from './modal/bigpic.js';
import { getData } from './api.js';
import { showAlert } from './util.js';


const template = document
  .querySelector('#picture')
  .content
  .querySelector('.picture');


const createPicture = (photo) => {
  const picture = template.cloneNode(true);

  const img = picture.querySelector('.picture__img');
  const likes = picture.querySelector('.picture__likes');
  const comments = picture.querySelector('.picture__comments');

  img.src = photo.url;
  likes.textContent = photo.likes;
  comments.textContent = photo.comments.length;

  picture.addEventListener('click', () => openModal(photo));

  return picture;
};

const createPicFragment = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const picture = createPicture(photo);
    fragment.append(picture);
  });

  return fragment;
};


const fill = (pictures) => {
  const picFragment = createPicFragment(pictures);
  const pictureContainer = document.querySelector('.pictures');

  pictureContainer.append(picFragment);
};


const fillPictures = () =>
  getData()
    .then(fill)
    .catch((errorText) => showAlert(errorText));


export { fillPictures };
