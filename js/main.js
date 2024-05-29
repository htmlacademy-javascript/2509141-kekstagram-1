import { fillPictures } from './minis.js';
import { initEditPhotoModal } from './modal/photo-edit.js';
import { initValidation } from './validation/validation.js';
import { initScaleControl } from './scale-control.js';
import { initEffectSlider } from './effects/slider-init.js';
import { initEffectSelector } from './effects/selection.js';


fillPictures();

initEditPhotoModal();

initValidation();

initScaleControl();

initEffectSlider();
initEffectSelector();
