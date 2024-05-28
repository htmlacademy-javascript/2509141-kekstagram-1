const BASE_URL = 'https://28.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/'
};
const Method = {
  GET: 'GET',
  POST: 'POST',
};
const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз'
};


const makeUrl = (route) =>
  `${BASE_URL}${route}`;
const makeOptions = (method, body) =>
  ({ method, body });

const processError = (value) => {
  throw new Error(value);
};

const processResponse = (response, errorText) =>
  response.ok
    ? response.json()
    : processError(errorText);


const load = (route, errorText, method = Method.GET, body = null) =>
  fetch(makeUrl(route), makeOptions(method, body))
    .then((response) => processResponse(response, errorText))
    .catch(() => processError(errorText));


const getData = () =>
  load(Route.GET_DATA, ErrorText.GET_DATA);
const sendData = (body) =>
  load(Route.SEND_DATA, ErrorText.SEND_DATA, Method.POST, body);


export { getData, sendData };
