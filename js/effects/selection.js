import { updateSlider } from './slider-control.js';
import { effects } from './effects.js';


const effectElements = document.querySelectorAll('.effects__radio');
const imgContainer = document.querySelector('.img-upload__preview');

let currentEffectName = '';


const getFilterValue = (value) => {
  const styleParts = effects[currentEffectName].filter;
  return styleParts.start + value + styleParts.end;
};
const setFilter = (value) => {
  if (currentEffectName) {
    imgContainer.style['filter'] = getFilterValue(value);
  }
};


const getEffectValue = (effect) =>
  `effects__preview--${effect}`;

const clearEffect = () => {
  const effect = getEffectValue(currentEffectName);
  imgContainer.classList.remove(effect);
  imgContainer.style.removeProperty('filter');
};

const addNewEffect = (effect) => {
  currentEffectName = effect;

  effect = getEffectValue(effect);
  imgContainer.classList.add(effect);
};

const applyEffect = (effect) => {
  clearEffect();
  addNewEffect(effect);
  updateSlider(effect);
};

const setDefaultEffect = () =>
  applyEffect('none');


const initEffectSelector = () => {
  addNewEffect('none');
  updateSlider('none');

  const addHandler = (element) =>
    element.addEventListener('change', () => applyEffect(element.value));

  effectElements.forEach(addHandler);
};


export { initEffectSelector, setFilter, setDefaultEffect };
