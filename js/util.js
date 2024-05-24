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

const showAlert = (message, timeout = 5000) => {
  const alertContainer = document.createElement('div');

  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(alertContainer.remove, timeout);
};


export {
  createIdGeneratorInRange,
  createRandomFloatInRange,
  getRandomIntInRange,
  assembleElements,
  isEscapeKey,
  showAlert,
  isUnique
};
