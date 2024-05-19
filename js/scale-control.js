const ScaleLimit = {
  MIN: 25,
  MAX: 100
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


const zoomIn = () => {
  let value = parseInt(scaleValue.value, 10);

  value += 25;
  if (value > ScaleLimit.MAX) {
    value = ScaleLimit.MAX;
  }

  scaleValue.value = `${value}%`;
  changeImg(value);
};

const zoomOut = () => {
  let value = parseInt(scaleValue.value, 10);

  value -= 25;
  if (value < ScaleLimit.MIN) {
    value = ScaleLimit.MIN;
  }

  scaleValue.value = `${value}%`;
  changeImg(value);
};


const activateScale = () => {
  scaleValue.value = '100%';
  zoomInBtn.addEventListener('click', zoomIn);
  zoomOutBtn.addEventListener('click', zoomOut);
};

activateScale();
