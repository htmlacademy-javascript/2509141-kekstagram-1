import { effects } from './effects.js';


const sliderContainer = document.querySelector('.img-upload__effect-level');
const slider = sliderContainer.querySelector('.effect-level__slider');
const levelValue = sliderContainer.querySelector('.effect-level__value');

const imgContainer = document.querySelector('.img-upload__preview');

let currentEffect = 'none';


noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100
  },
  start: 0,
  connect: 'lower'
});


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

  slider.noUiSlider.updateOptions(effects[currentEffect].options);
};


slider.noUiSlider.on('update', () => {
  const value = slider.noUiSlider.get();

  levelValue.value = value;

  updateEffect(value);
});


export { updateSlider };
