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


const createEscTumbler = (cb) => {

  const onDocumentEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      cb();
    }
  };

  const add = () => {
    document.addEventListener('keydown', onDocumentEscKeydown);
    return true;
  };
  const remove = () => {
    document.removeEventListener('keydown', onDocumentEscKeydown);
    return false;
  };


  let isModalOpen = false;
  return () => {
    isModalOpen = isModalOpen ? remove() : add();
  };
};

const hideModal = (modal, toggleEscHandler) => {
  document.querySelector('body').classList.remove('modal-open');
  modal.classList.add('hidden');

  toggleEscHandler();
};

const showModal = (modal, toggleEscHandler) => {
  document.querySelector('body').classList.add('modal-open');
  modal.classList.remove('hidden');

  toggleEscHandler();
};

export {
  createIdGeneratorInRange,
  createRandomFloatInRange,
  getRandomIntInRange,
  assembleElements,
  isEscapeKey,
  createEscTumbler,
  hideModal,
  showModal,
  isUnique
};
