import { createSomePhotos } from './photo-data.js';
import { openModal } from './modal/bigpic.js';

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

const createPicFragment = () => {
  const fragment = document.createDocumentFragment();
  const photos = createSomePhotos();

  photos.forEach((photo) => {
    const picture = createPicture(photo);
    fragment.append(picture);
  });

  return fragment;
};

const fillPictures = () => {
  const picFragment = createPicFragment();
  const pictureContainer = document.querySelector('.pictures');

  pictureContainer.append(picFragment);
};


export { fillPictures };
