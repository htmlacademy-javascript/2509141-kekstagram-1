import { createEscTumbler } from './util.js';


const message = document
  .querySelector('#error')
  .content
  .querySelector('.error')
  .cloneNode(true);

const toggleEscHandler = createEscTumbler(close);


function close () {
  message.remove();

  toggleEscHandler();
}

const onErrorMouseup = (evt) => {
  const container = message.querySelector('.error__inner');
  if (!container.contains(evt.target)) {
    close();
  }
};

const showError = () => {
  const closeBtn = message.querySelector('.error__button');

  closeBtn.addEventListener('click', close);
  document.addEventListener('mouseup', onErrorMouseup);
  toggleEscHandler();
  // Как закрывать на Esc только окно с ошибкой, но не окно редактирования изображения, когда открыты оба?

  const body = document.querySelector('body');
  body.append(message);
};

export { showError };
