import { fillPictures } from './minis.js';
import './modal/photo-edit.js';
import './validation/validation.js';
import './scale-control.js';
import { initEffectSlider } from './effects/slider-init.js';
import { initEffectSelector } from './effects/selection.js';

fillPictures();

initEffectSlider();
initEffectSelector();
