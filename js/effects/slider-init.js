import { setFilter } from './selection.js';


const sliderContainer = document.querySelector('.img-upload__effect-level');
const slider = sliderContainer.querySelector('.effect-level__slider');
const levelValue = sliderContainer.querySelector('.effect-level__value');


const createSlider = () => {

  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 100
    },
    start: 0,
    connect: 'lower'
  });

};


const addUpdateSliderHandler = () => {

  slider.noUiSlider.on('update', () => {
    const value = slider.noUiSlider.get();
    levelValue.value = value;
    setFilter(value);
  });

};


const initEffectSlider = () => {
  createSlider();
  addUpdateSliderHandler();
};


export { initEffectSlider };
