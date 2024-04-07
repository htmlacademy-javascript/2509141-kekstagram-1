const TEST_PHOTOS_QUANTITY = 25;

const MIN_PHOTO_ID = 1;
const MAX_PHOTO_ID = 25;

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. ' +
    'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота ' +
    'и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. ' +
    'Как можно было поймать такой неудачный момент?!'
];
const NAMES = ['Танатос', 'Персефона', 'Деметра', 'Никта', 'Сизиф', 'Ахиллес', 'Патрокл', 'Олег'];


const createIdGeneratorInRange = (min, max) =>
  () => min <= max ? min++ : null;

const createRandomFloatInRange = (min, max) =>
  min + Math.random() * (max + 1 - min);

const getRandomIntInRange = (min, max) =>
  Math.floor(createRandomFloatInRange(min, max));


const createComment = (id) => ({
  id: id,
  avatar: `img/avatar-${getRandomIntInRange(1, 6)}.svg`,
  message: MESSAGES[getRandomIntInRange(0, MESSAGES.length - 1)],
  name: NAMES[getRandomIntInRange(0, NAMES.length - 1)]
});

const createSomeComments = () => {
  const createId = createIdGeneratorInRange(1, 100);
  const commentsQuantity = getRandomIntInRange(1, 5);

  const comments = Array.from(
    {length: commentsQuantity},
    () => createComment(createId())
  );

  return comments;
};


const createPhotoDescription = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: `описание для фотографии №${id}`,
  likes: getRandomIntInRange(MIN_LIKES, MAX_LIKES),
  comments: createSomeComments()
});

const createSomePhotoDescriptions = () => {
  const createId = createIdGeneratorInRange(MIN_PHOTO_ID, MAX_PHOTO_ID);

  return Array.from(
    {length: TEST_PHOTOS_QUANTITY},
    () => createPhotoDescription(createId())
  );
};
