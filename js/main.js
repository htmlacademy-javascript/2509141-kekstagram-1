import { loadPictures } from './thumbnails.js';
import { initBigPicture } from './modal/big-picture.js';
import { initEditPictureModal } from './modal/picture-edit.js';
import { initValidation } from './validation/validation.js';
import { initScaleControl } from './scale-control.js';
import { initEffectSlider } from './effects/slider-init.js';
import { initEffectSelector } from './effects/selection.js';


loadPictures();

initBigPicture();

initEditPictureModal();

initValidation();

initScaleControl();

initEffectSlider();
initEffectSelector();
