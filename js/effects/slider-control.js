import { effects } from './effects.js';


const sliderContainer = document.querySelector('.img-upload__effect-level');
const slider = sliderContainer.querySelector('.effect-level__slider');

const imgContainer = document.querySelector('.img-upload__preview');


let currentEffect = 'none';

const getFilterValue = (value) => {
  const styleParts = effects[currentEffect].filter;
  return styleParts.start + value + styleParts.end;
};

const updateEffect = (value) => {
  imgContainer.style['filter'] = getFilterValue(value);
};


const toggleSliderVisibility = (effect) => {
  if (effect === 'none') {
    sliderContainer.classList.add('hidden');
  } else {
    sliderContainer.classList.remove('hidden');
  }
};

const updateSlider = (effect) => {
  currentEffect = effect;

  toggleSliderVisibility(effect);

  slider.noUiSlider.updateOptions(effects[effect].options);
};


export { updateSlider, updateEffect };
