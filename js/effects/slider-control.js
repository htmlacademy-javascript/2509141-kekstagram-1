import { effects } from './effects.js';


const sliderContainer = document.querySelector('.img-upload__effect-level');
const slider = sliderContainer.querySelector('.effect-level__slider');


const toggleSliderVisibility = (effect) => {
  if (effect === 'none') {
    sliderContainer.classList.add('hidden');
  } else {
    sliderContainer.classList.remove('hidden');
  }
};

const updateSlider = (effect) => {
  toggleSliderVisibility(effect);

  slider.noUiSlider.updateOptions(effects[effect].options);
};


export { updateSlider };
