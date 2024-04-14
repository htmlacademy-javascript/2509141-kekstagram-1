const createIdGeneratorInRange = (min, max) =>
  () => min <= max ? min++ : null;

const createRandomFloatInRange = (min, max) =>
  min + Math.random() * (max + 1 - min);

const getRandomIntInRange = (min, max) =>
  Math.floor(createRandomFloatInRange(min, max));

export { createIdGeneratorInRange, createRandomFloatInRange, getRandomIntInRange };
