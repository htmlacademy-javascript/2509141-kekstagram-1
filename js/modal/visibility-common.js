import { isEscapeKey } from '../util.js';


const body = document.querySelector('body');

const hideModal = (modal, escListener) => {
  body.classList.remove('modal-open');
  modal.classList.add('hidden');

  escListener.off();
};

const showModal = (modal, escListener) => {
  body.classList.add('modal-open');
  modal.classList.remove('hidden');

  escListener.on();
};


const createEscListener = (cb) => {

  const onDocumentEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      cb();
    }
  };

  const on = () =>
    document.addEventListener('keydown', onDocumentEscKeydown);
  const off = () =>
    document.removeEventListener('keydown', onDocumentEscKeydown);

  return { on, off };
};


export { createEscListener, hideModal, showModal };
