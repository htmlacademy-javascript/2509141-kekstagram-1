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
  if (value > 100) {
    value = 100;
  }

  scaleValue.value = `${value}%`;
  changeImg(value);
};

const zoomOut = () => {
  let value = parseInt(scaleValue.value, 10);

  value -= 25;
  if (value < 0) {
    value = 0;
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
