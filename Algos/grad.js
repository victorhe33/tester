// Declare a function "rotationSequence", which takes a callback as the first argument and an unspecified number of subsequent arguments. It should return a function, which also takes an unspecified number of arguments.
// The returned function may only be invoked with arguments that were passed into the outer function, and furthermore, those arguments must be inserted in the *same order*. 
// On subsequent invocations, it should keep track of where in it left off, and only accept the next item in the sequence as the first passed-in argument.
// If it is invoked correctly, it should return an array containing the results of running the callback on all the passed-in arguments. If not, return the string "invalid input".

// Example:
// const multiplyBy2 = (num) => num * 2;
// const zeroToTwenty = rotationSequence(multiplyBy2, 0, 5, 10, 15, 20);
// zeroToTwenty(0, 5, 10) // -> [0, 10, 20]
// zeroToTwenty(20) // -> 'invalid input'
// zeroToTwenty(15, 20, 0, 5) // -> [30, 40, 0, 10]
// zeroToTwenty(10, 15, 20, 0, 5, 10, 15, 20, 0) // => [20, 30, 40, 0, 10, 30, 40, 0]

function rotationSequence(callback, ...args) {

}


// Declare a function "stringLeveler", which takes two arguments: an array of strings and a number.
// "stringLeveler" should iterate through the array and modify each string to make it the same length as the number.
// If the string is longer than the passed-in number, remove characters from the end until it reaches the target length.
// If the string is shorter than the passed-in number, append "*" characters to the end until it reaches the target length.
// It should return a string consisting of whichever characters have been deleted from the strings in the array. If none have been deleted, return an empty string.

// Example:
// const creatures = ['cat', 'ferret', 'elephant', 'tyrannosaurus', 'minotaur'];
// stringLeveler(creatures, 6) // -> 'ntosaurusur'
// console.log(creatures) // -> ['cat***', 'ferret', 'elepha', 'tyrann', 'minota'];

function stringLeveler(array, num) {

}


// Declare a function "deepMap", which takes an array and a callback as arguments.
// "deepMap" should run the callback on every array element, add each result to a new array, and return the new array.
// It should account for any level of nesting - i.e., if the input array contains subarrays, the callback must run on every nested element, and the output array must contain the same number of levels.

// Example:
// const multiplyBy2 = (num) => num * 2;
// deepMap([1, 3, 5, [4, 10, [11], 12, [22, 8]]], multiplyBy2) // -> [2, 6, 10, [8, 20, [22], 24, [44, 16]]]]

function deepMap(array, callback) {

}


module.exports = {
  rotationSequence,
  stringLeveler,
  deepMap
}