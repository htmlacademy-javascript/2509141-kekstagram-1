import { createEscListener } from './visibility-common.js';


let status;
let message;
let escListener;


const setStatus = (isSuccess) => {
  status = isSuccess ? 'success' : 'error';
};

const createMessage = () => {
  message = document
    .querySelector(`#${status}`)
    .content
    .querySelector(`.${status}`)
    .cloneNode(true);

  escListener = createEscListener(close);
};


const onErrorMouseup = (evt) => {
  const container = message.querySelector(`.${status}__inner`);
  if (!container.contains(evt.target)) {
    close();
  }
};

function close () {
  message.remove();

  escListener.off();
  document.removeEventListener('mouseup', onErrorMouseup);
}


const showResultAlert = (isSuccess = true) => {
  setStatus(isSuccess);
  createMessage();

  const closeBtn = message.querySelector(`.${status}__button`);

  closeBtn.addEventListener('click', close);
  document.addEventListener('mouseup', onErrorMouseup);
  escListener.on();

  const body = document.querySelector('body');
  body.append(message);
};


export { showResultAlert };
