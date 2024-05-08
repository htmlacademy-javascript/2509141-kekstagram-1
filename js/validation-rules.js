import { isUnique } from './util.js';


const isValidhashtag = (value) =>
  (value === '') ? (true) : (/^#[a-zа-яё0-9]{1,19}$/i).test(value);

const validateHashtags = (string) => {
  // хэш-теги нечувствительны к регистру
  string = string.toLowerCase();

  // хэш-теги разделяются пробелами
  const hashtags = string.split(' ');

  // нельзя указать больше пяти хэш-тегов
  if (hashtags.length > 5) {
    return false;
  }

  // один и тот же хэш-тег не может быть использован дважды
  const allUnique = hashtags.every(isUnique);
  const allValid = hashtags.every(isValidhashtag);

  return allUnique && allValid;
};


const validateDescription = (string) =>
  string.length <= 140;


export { validateHashtags, validateDescription };
