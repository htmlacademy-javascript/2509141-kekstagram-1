const EFFECTS = {
  none: {
    filter: {
      start: '',
      end: ''
    },
    options: { }
  },

  chrome: {
    filter: {
      start: 'grayscale(',
      end: ')'
    },
    options: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1,
    }
  },

  sepia: {
    filter: {
      start: 'sepia(',
      end: ')'
    },
    options: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1,
    },
  },

  marvin: {
    filter: {
      start: 'invert(',
      end: '%)'
    },
    options: {
      range: {
        min: 0,
        max: 100
      },
      start: 100,
      step: 1,
    }
  },

  phobos: {
    filter: {
      start: 'blur(',
      end: 'px)'
    },
    options: {
      range: {
        min: 0,
        max: 3
      },
      start: 3,
      step: 0.1
    }
  },

  heat: {
    filter: {
      start: 'brightness(',
      end: ')'
    },
    options: {
      range: {
        min: 1,
        max: 3
      },
      start: 3,
      step: 0.1
    }
  }
};


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
  const styleParts = EFFECTS[currentEffect].filter;
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

  slider.noUiSlider.updateOptions(EFFECTS[currentEffect].options);
};


slider.noUiSlider.on('update', () => {
  const value = slider.noUiSlider.get();

  levelValue.value = value;

  updateEffect(value);
});


export { updateSlider };
