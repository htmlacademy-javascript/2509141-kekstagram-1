import { createIdGeneratorInRange, getRandomIntInRange } from './util.js';
import { createSomeComments } from './comments-data.js';

const TEST_PHOTOS_QUANTITY = 25;

const MIN_PHOTO_ID = 1;
const MAX_PHOTO_ID = 25;

const MIN_LIKES = 15;
const MAX_LIKES = 200;


const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: `описание для фотографии №${id}`,
  likes: getRandomIntInRange(MIN_LIKES, MAX_LIKES),
  comments: createSomeComments()
});

const createSomePhotos = (quantity = TEST_PHOTOS_QUANTITY) => {
  const createId = createIdGeneratorInRange(MIN_PHOTO_ID, MAX_PHOTO_ID);

  return Array.from(
    {length: quantity},
    () => createPhoto(createId())
  );
};

export { createSomePhotos };
