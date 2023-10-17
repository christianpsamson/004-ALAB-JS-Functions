// #1
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log(maxOfTwoNumbers(3, 9));
// #1

// #2 Return the largest number
let arrayNum;
const maxOfThree = function (num1, num2, num3) {
  let arrayNum = [num1, num2, num3];
  arrayNum.sort(function (a, b) {
    return b - a;
  });
  console.log(arrayNum[0]);
};
maxOfThree(9, 27, 6);
// #2

// #3 Vowel
const isCharAVowel = (char) =>
  console.log(["a", "e", "i", "o", "u"].includes(char.toLowerCase()));
isCharAVowel("c");
// #3

// #4 Returns the sum of array
let sum = 0;

const sumArray = function (arrayValues) {
  for (i = 0; i < arrayValues.length; i++) {
    sum += arrayValues[i];
  }
  console.log(sum);
  return sum;
};
sumArray([2, 15, 5, 9]);
// #4

// #5 Product of array
let prod = 1;

const prodArray = function (arrayValues) {
  for (i = 0; i < arrayValues.length; i++) {
    prod *= arrayValues[i];
  }
  console.log(prod);
  return prod;
};
prodArray([1, 2, 23]);
// #5

// #6 Count the arguments (Rest Parameter)
const numArgs = function (...arrayValues) {
  console.log(arrayValues.length);
};
numArgs("blue", "red", "green", "black");
// #6

// #7 Reverse a word
const reverseString = function (inputWord) {
  const reversedWord = inputWord.split("").reverse().join("");
  console.log(reversedWord);
};
reverseString("example");
// #7

// #8
let totalChar = 0;
const longestStringInArray = function (input) {
  for (i = 0; i < input.length; i++) {
    if (totalChar < input[i].length) {
      totalChar = input[i].length;
    }
  }
  console.log(totalChar);
  return totalChar;
};
longestStringInArray(["arrow functions", "argument", "parameter"]);
// #8

// #9
let outputString = "";
let arrayInput = [];
const stringsLongerThan = function (inputString, inputNum) {
  for (i = 0; i < inputString.length; i++) {
    if (inputString[i].length > inputNum) {
      arrayInput.push(inputString[i]);
    }
  }
  console.log(arrayInput);
};
stringsLongerThan(["say", "hello", "in", "the", "morning", "validated"], 3);
// #9

// #10
let sum = 0;
const addList = function (...input) {
  for (i = 0; i < input.length; i++) {
    sum += input[i];
  }
  console.log(sum);
  return sum;
};
addList(11, 21, 2, 6);
// #10
