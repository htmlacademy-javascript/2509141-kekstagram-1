const createRandomFloatInRange = (min, max) =>
  min + Math.random() * (max + 1 - min);


const getRandomIntInRange = (min, max) =>
  Math.floor(createRandomFloatInRange(min, max));


const getRandomIndex = (length) =>
  getRandomIntInRange(0, length - 1);


const getRandomUniqueIndex = (used, length) => {
  if (length <= used.length) {
    throw new Error('Нет свободного индекса');
  }

  let index;

  do {
    index = getRandomIndex(length);
  } while (used.includes(index));

  return index;
};

const getRandomUniqueElements = (arr, count) => {
  const usedIndexes = [];
  const result = [];

  count = Math.min(arr.length, count);
  while (result.length < count) {
    const index = getRandomUniqueIndex(usedIndexes, arr.length);

    usedIndexes.push(index);
    result.push(arr[index]);
  }

  return result;
};


export {
  getRandomIntInRange,
  getRandomUniqueElements
};
