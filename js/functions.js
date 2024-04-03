// 1. Палиндром - вариант 1 - вложенные функции
const isPalindrome = (str) => {
  cleanString();

  let reversedStr = '';
  reverseStr();

  return str === reversedStr;


  function cleanString() {
    str = str.replaceAll(' ', '');
    str = str.toLowerCase();
  }

  function reverseStr() {
    for (const letter of str) {
      reversedStr = letter + reversedStr;
    }
  }
};

// 1. Палиндром - вариант 2 - вспомогательные функции впереди в соответствии с Д5
const getCleanString = (str) => {
  str = str.replaceAll(' ', '');
  str = str.toLowerCase();

  return str;
};

const getHalfLength = (str) => str.length / 2;

const isHalvesEqual = (str) => {
  for (let i = 0, oppositeI = -(i + 1); i < getHalfLength(str); i++, oppositeI--) {
    const letter = str.at(i);
    const oppositeletter = str.at(oppositeI);

    if (letter !== oppositeletter) {
      return false;
    }
  }

  return true;
};

const isPalindromeOpt = (str) => {
  str = getCleanString(str);
  const result = isHalvesEqual(str);

  return result;
};


// 2
const getNumbers = (value) => {
  let numbersInString = '';
  findNumbersInString();

  const resultNumber = parseInt(numbersInString, 10);

  return resultNumber;


  function findNumbersInString() {
    for (const letter of value.toString()) {
      if (isNumber(letter)) {
        numbersInString += letter;
      }
    }
  }

  function isNumber(suspectNumber) {
    suspectNumber = parseInt(suspectNumber, 10);
    return !Number.isNaN(suspectNumber);
  }
};


// 3
const myPadStart = (str, minLength, padStr) => {
  let deficientLength = minLength - str.length;

  if (deficientLength <= 0) {
    return str;
  }

  fillStr();

  return str;


  function fillStr () {
    while (deficientLength > 0) {
      addPad();
      deficientLength -= padStr.length;
    }
  }

  function addPad () {
    str = padStr.slice(0, deficientLength) + str;
  }
};


// 4
const isValidLength = (str, maxLength) => str.length <= maxLength;
