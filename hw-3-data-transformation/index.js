/**
 * @param {string} str
 * @return {string}
 */
// function returns string without spaces from the beginning and from the end, and in upper letter register
const transformString = (str) => {
  let newStr = str
              .trim()
              .toUpperCase();

  return newStr;
};

/**
 * @param {number[]} array
 * @return {number}
 */
// function should return max number from array
const findMaxNumber = (array) => {

  if (array === []){
    return NaN;
  } else{

    let newArr = array
    .slice()
    .sort((a, b) => {
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0;
      })

    return newArr.at(-1);
    //return newArr[newArr.length - 1];
  }
};


/**
 * @param {string} str
 * @return {number[]}
 */
// function returns array of length of every word in string
const getStringWordsLength = (str) => {

  if(str === []){
    return str
  }else{
    let numArr = [];

    wordsArr = str
                .split(', ')
                .forEach((item, index) => {
                  numArr[index] = item.length;
                });

    /* or we can go another way:

    wordsArr = str.split(', ');
    
    for (i = 0; i < wordsArr.length; i++){
        numArr[i] = wordsArr[i].length;
    }

    */

    return numArr;
  }


};

/**
 * @param {number[]} numArray
 * @param {number} degree
 * @return {number[]}
 */
// function returns array of numbers as result of initial number and degree
const getTransformedNumbers = (numArray, degree) => {
  let newArr =[];

  numArray.forEach((item, index) => {
    newArr[index] = Math.pow(item, degree);
  })

  /* or another variant
  for (i=0; i<numArray.length; i++){
    newArr[i] = Math.pow(numArray[i], degree);
  }
  */

  return newArr;
};

/**
 * @param {string} text
 * @return {string}
 */
// function returns text with all first letters at the beginning of sentence capitalized
const getTransformedText = (text) => {
  const newText = text
              .split('. ')
              .map(sentence => {
                let newSentence = sentence[0].toUpperCase() + sentence.slice(1);
                return newSentence;
              })
              .join('. ');

  return newText;
};

/**
 * @param {any[]} array
 * @return {number[]}
 */
// function filters array and return only array of positive integers
const getPositiveIntegers = (array) => {
  const filteredArr = array.filter(item => typeof item === 'number' && item > 0 && item % 1 === 0);
  return filteredArr;
};

/**
 * @param {any[]} array
 * @param {any} value
 * @return {number}
 */
// functions return index of element in array
const getElementIndex = (array, value) => {
  return array.indexOf(value);
};

/**
 * @param {any[]} array
 * @param {any} value
 * @return {any | null}
 */
// function returns item from array or undefined if item is not found
const getItem = (array, value) => {
  if(array.includes(value)){
    return value;
  } else{
    return undefined;
  }
};

/**
 * @param {string[]} array
 * @param {string} word
 * @return {boolean}
 */
// function returns true if word is in every string in array and false if is not
const isWordInEveryArrayString = (array, word) => {
  if (array === []){
    return false;
  } else{
    return array.every(sentence => sentence.includes(word));
  }
};

/**
 * @param {number[]} array
 * @return {boolean}
 */
// function returns true if any number in array is negative
const isNegativeNumbersInArray = (array) => {
  return array.some(item => typeof item === 'number' && item < 0);
};

/**
 * @param {number[]} array
 * @param {number} startPosition
 * @param {number} endPosition
 * @return {any[]}
 */
// function returns part of array from start to end (including end) positions
const returnArrayPart = (array, startPosition, endPosition) => {
  if(array === []){
    return array;
  } else{
    let newArr = array.slice(startPosition, endPosition + 1);
    return newArr;
  }
};


module.exports = {
  transformString,
  findMaxNumber,
  getStringWordsLength,
  getTransformedNumbers,
  getTransformedText,
  getPositiveIntegers,
  getElementIndex,
  getItem,
  isWordInEveryArrayString,
  isNegativeNumbersInArray,
  returnArrayPart,
};
