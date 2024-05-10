import { createIdGeneratorInRange, getRandomIntInRange } from './util.js';
import { createSomeComments } from './comments-data.js';

const TEST_PHOTOS_QUANTITY = 25;

const idCount = {
  MIN: 1,
  MAX: 25
};

const likesCount = {
  MIN: 15,
  MAX: 200
};


const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: `описание для фотографии №${id}`,
  likes: getRandomIntInRange(likesCount.MIN, likesCount.MAX),
  comments: createSomeComments()
});

const createSomePhotos = (quantity = TEST_PHOTOS_QUANTITY) => {
  const createId = createIdGeneratorInRange(idCount.MIN, idCount.MAX);

  return Array.from(
    {length: quantity},
    () => createPhoto(createId())
  );
};

export { createSomePhotos };
