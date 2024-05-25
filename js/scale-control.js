const ScaleOptions = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
  DEFAULT: 100
};

const scale = document.querySelector('.scale');
const zoomOutBtn = scale.querySelector('.scale__control--smaller');
const zoomInBtn = scale.querySelector('.scale__control--bigger');
const scaleValue = scale.querySelector('.scale__control--value');
const imgContainer = document.querySelector('.img-upload__preview');


const changeImg = (value) => {
  value /= 100;
  imgContainer.style['transform'] = `scale(${value})`;
};

const setScale = (value) => {
  scaleValue.value = `${value}%`;
  changeImg(value);
};
const resetScale = () =>
  setScale(ScaleOptions.DEFAULT);


const zoomIn = () => {
  let value = parseInt(scaleValue.value, 10);

  value += ScaleOptions.STEP;
  if (value > ScaleOptions.MAX) {
    value = ScaleOptions.MAX;
  }

  setScale(value);
};

const zoomOut = () => {
  let value = parseInt(scaleValue.value, 10);

  value -= ScaleOptions.STEP;
  if (value < ScaleOptions.MIN) {
    value = ScaleOptions.MIN;
  }

  setScale(value);
};


const initScaleControl = () => {
  resetScale();
  zoomInBtn.addEventListener('click', zoomIn);
  zoomOutBtn.addEventListener('click', zoomOut);
};


export { initScaleControl, resetScale };
