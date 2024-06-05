const createIdGeneratorInRange = (min, max) =>
  () => min <= max ? min++ : null;

const isEscapeKey = (evt) =>
  evt.key === 'Escape';

const isUnique = (value, index, arr) =>
  arr.indexOf(value) === index;

const assembleElements = (container, ...elements) =>
  elements.forEach((element) => container.append(element));

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

const showAlert = (message) => {
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
};


export {
  createIdGeneratorInRange,
  assembleElements,
  isEscapeKey,
  showAlert,
  isUnique,
  debounce
};
