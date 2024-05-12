/* global noUiSlider:readonly */

const sliderContainer = document.querySelector('.img-upload__effect-level');
const slider = sliderContainer.querySelector('.effect-level__slider');
const levelValue = sliderContainer.querySelector('.effect-level__value');

const imgContainer = document.querySelector('.img-upload__preview');


levelValue.value = 10;

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100
  },
  start: 0,
  connect: 'lower'
});

const updateSlider = (effect) => {
  sliderContainer.classList.remove('hidden');

  let newOptions = {};

  switch (effect) {
    case 'chrome':
      newOptions = {
        range: {
          min: 0,
          max: 1
        },
        start: 1,
        step: 0.1,
      };
      break;

    case 'sepia':
      newOptions = {
        range: {
          min: 0,
          max: 1
        },
        start: 1,
        step: 0.1,
      };
      break;

    case 'marvin':
      newOptions = {
        range: {
          min: 0,
          max: 100
        },
        start: 100,
        step: 1,
      };
      break;

    case 'phobos':
      newOptions = {
        range: {
          min: 0,
          max: 3
        },
        start: 3,
        step: 0.1
      };
      break;

    case 'heat':
      newOptions = {
        range: {
          min: 1,
          max: 3
        },
        start: 3,
        step: 0.1
      };
      break;

    default:
      sliderContainer.classList.add('hidden');
      break;
  }

  slider.noUiSlider.updateOptions(newOptions);
};

const updateEffect = (value) => {
  let styleValue;

  switch (imgContainer.classList.item(1)) {
    case 'effects__preview--chrome':
      styleValue = `grayscale(${value})`;
      break;
    case 'effects__preview--sepia':
      styleValue = `sepia(${value})`;
      break;
    case 'effects__preview--marvin':
      styleValue = `invert(${value}%)`;
      break;
    case 'effects__preview--phobos':
      styleValue = `blur(${value}px)`;
      break;
    case 'effects__preview--heat':
      styleValue = `brightness(${value})`;
      break;
    default:
      imgContainer.style.removeProperty('filter');
      break;
  }

  imgContainer.style['filter'] = styleValue;
};

slider.noUiSlider.on('update', () => {
  const value = slider.noUiSlider.get();

  levelValue.value = value;

  updateEffect(value);
});

export { updateSlider };
