const effectElements = document.querySelectorAll('.effects__radio');
const imgContainer = document.querySelector('.img-upload__preview');

const resetEffect = () => {
  const currentEffect = imgContainer.classList.item(1);
  imgContainer.classList.remove(currentEffect);
};
const addNewEffect = (effect) => {
  effect = `effects__preview--${effect}`;
  imgContainer.classList.add(effect);
};

const applyEffect = (effect) => {
  resetEffect();
  addNewEffect(effect);
};


const activateEffectsSelector = () => {
  applyEffect('none');

  const addHandler = (element) =>
    element.addEventListener('change', () => applyEffect(element.value));

  effectElements.forEach(addHandler);
};


activateEffectsSelector();
