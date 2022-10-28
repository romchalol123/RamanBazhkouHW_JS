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
  let newArr = array
  .slice()
  .sort((a, b) => {
      if (a > b){
        return 1;
      }else if (a < b){
        return -1;
      }
      else{
        return 0;
      }
    })

  const lastNewArrEl = newArr[newArr.length - 1];

  if (isNaN(lastNewArrEl)){
    return NaN;
  } else{
    return lastNewArrEl;
  }
};


/**
 * @param {string} str
 * @return {number[]}
 */
// function returns array of length of every word in string
const getStringWordsLength = (str) => {

  if(str == 0){
    return [];
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
  // write you code here
};

/**
 * @param {string} text
 * @return {string}
 */
// function returns text with all first letters at the beginning of sentence capitalized
const getTransformedText = (text) => {
  // write your code here
};

/**
 * @param {any[]} array
 * @return {number[]}
 */
// function filters array and return only array of positive integers
const getPositiveIntegers = (array) => {
  // write your code here
};

/**
 * @param {any[]} array
 * @param {any} value
 * @return {number}
 */
// functions return index of element in array
const getElementIndex = (array, value) => {
  // write your code here
};

/**
 * @param {any[]} array
 * @param {any} value
 * @return {any | null}
 */
// function returns item from array or undefined if item is not found
const getItem = (array, value) => {
  // write your code here
};

/**
 * @param {string[]} array
 * @param {string} word
 * @return {boolean}
 */
// function returns true if word is in every string in array and false if is not
const isWordInEveryArrayString = (array, word) => {
  // write your code here
};

/**
 * @param {number[]} array
 * @return {boolean}
 */
// function returns true if any number in array is negative
const isNegativeNumbersInArray = (array) => {
  // write your code here
};

/**
 * @param {number[]} array
 * @param {number} startPosition
 * @param {number} endPosition
 * @return {any[]}
 */
// function returns part of array from start to end (including end) positions
const returnArrayPart = (array, startPosition, endPosition) => {
  // write your code here
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
