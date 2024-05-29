import { createIdGeneratorInRange, getRandomIntInRange } from './util.js';
import { createSomeComments } from './comments/comments-data.js';


const TEST_PHOTOS_QUANTITY = 25;
const IdCount = {
  MIN: 1,
  MAX: 25
};
const LikesCount = {
  MIN: 15,
  MAX: 200
};


const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: `описание для фотографии №${id}`,
  likes: getRandomIntInRange(LikesCount.MIN, LikesCount.MAX),
  comments: createSomeComments()
});

const createSomePhotos = (quantity = TEST_PHOTOS_QUANTITY) => {
  const createId = createIdGeneratorInRange(IdCount.MIN, IdCount.MAX);

  return Array.from(
    {length: quantity},
    () => createPhoto(createId())
  );
};


export { createSomePhotos };
