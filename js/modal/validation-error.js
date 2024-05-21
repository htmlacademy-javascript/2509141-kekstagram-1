import { createEscListener } from './visibility-common.js';


const message = document
  .querySelector('#error')
  .content
  .querySelector('.error')
  .cloneNode(true);

const escListener = createEscListener(close);


const onErrorMouseup = (evt) => {
  const container = message.querySelector('.error__inner');
  if (!container.contains(evt.target)) {
    close();
  }
};

function close () {
  message.remove();

  escListener.off();
  document.removeEventListener('mouseup', onErrorMouseup);
}

const showError = () => {
  const closeBtn = message.querySelector('.error__button');

  closeBtn.addEventListener('click', close);
  document.addEventListener('mouseup', onErrorMouseup);
  escListener.on();

  const body = document.querySelector('body');
  body.append(message);
};


export { showError };
