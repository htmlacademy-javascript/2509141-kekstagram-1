import { showAlert } from './util.js';


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

const processResponse = (response) =>
  response.ok
    ? response.json()
    : showAlert(`${response.status} ${response.statusText}`);


const load = (route, errorText, method = Method.GET, body = null) =>
  fetch(makeUrl(route), makeOptions(method, body))
    .then(processResponse)
    .catch(() => showAlert(errorText));


const getData = () =>
  load(Route.GET_DATA, ErrorText.GET_DATA);
const sendData = (body) =>
  load(Route.SEND_DATA, ErrorText.SEND_DATA, Method.POST, body);


export { getData, sendData };
