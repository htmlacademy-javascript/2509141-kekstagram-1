const createIdGeneratorInRange = (min, max) =>
  () => min <= max ? min++ : null;

const createRandomFloatInRange = (min, max) =>
  min + Math.random() * (max + 1 - min);

const getRandomIntInRange = (min, max) =>
  Math.floor(createRandomFloatInRange(min, max));

const isEscapeKey = (evt) =>
  evt.key === 'Escape';

const isUnique = (value, index, arr) =>
  arr.indexOf(value) === index;

const assembleElements = (container, ...elements) =>
  elements.forEach((element) => container.append(element));


export {
  createIdGeneratorInRange,
  createRandomFloatInRange,
  getRandomIntInRange,
  assembleElements,
  isEscapeKey,
  isUnique
};
