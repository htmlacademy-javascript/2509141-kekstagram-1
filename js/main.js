import { loadPictures } from './minis.js';
import { initBigpic } from './modal/bigpic.js';
import { initEditPictureModal } from './modal/picture-edit.js';
import { initValidation } from './validation/validation.js';
import { initScaleControl } from './scale-control.js';
import { initEffectSlider } from './effects/slider-init.js';
import { initEffectSelector } from './effects/selection.js';


loadPictures();

initBigpic();

initEditPictureModal();

initValidation();

initScaleControl();

initEffectSlider();
initEffectSelector();
