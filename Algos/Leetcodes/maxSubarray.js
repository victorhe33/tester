//https://leetcode.com/problems/maximum-subarray/submissions/900548676/

//COMPLEXITY Time-n Space-1
const maxSubArray = function (nums) {
  let largestSum = nums[0];
  let currSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currSum = currSum + nums[i]
    if (nums[i] > currSum) currSum = nums[i];
    if (currSum > largestSum) largestSum = currSum;
  }

  return largestSum;
}

const input = [1, -2, 3, 10, -4, 7, 2, -5]
console.log(maxSubArray(input));
// returns 18 from subarray [3, 10, -4, 7, 2]

const input2 = [15, 20, -5, 10]
console.log(maxSubArray(input2));
// returns 40 from subarray [15, 20, -5, 10]


/*
You are given an array of integers with both positive and negative numbers.
A valid subarray is any slice of consecutive elements from the array.
(
  e.g. the following are valid subarrays of [1, 2, 3, 4, 5]
  [1, 2, 3]
  [2, 3, 4]
  [3]
  [1, 2, 3, 4, 5]
)
Find the subarray with the largest sum from the input array.

e.g.
input = [1, -2, 3, 10, -4, 7, 2, -5]
maxSubarray(input); 
// returns 18 from subarray [3, 10, -4, 7, 2]

input2 = [15, 20, -5, 10]
maxSubarray(input2); 
// returns 40 from subarray [15, 20, -5, 10]
*/

//Sliding Window

// const maxSubarray = (arr) => {
//   let l = 0;
//   let r = arr.length;
//   let max = -Infinity;
//   while (l !== r) {
//     const sum = sumArray(arr.slice(l, r))
//     const leftSum = sumArray(arr.slice(l, r - 1))
//     const rightSum = sumArray(arr.slice(l + 1, r))
//     const greater = Math.max(sum, leftSum, rightSum);
//     if (max < greater) max = greater;
//     leftSum <= rightSum ?
//       l += 1 :
//       r -= 1;
//   }
//   return max;
// }

const sumArray = (arr) => {
  return arr.reduce((acc, e) => {
    acc += e;
    return acc;
  }, 0) || -Infinity
}

/*
  Extension: solve in linear time and constant space
  Hint: Kadane's Algorithm
*/

//Kadane’s Algorithm

const kadanesMaxSubarray = (array) => {
  let maxSoFar = -Infinity;
  let maxEndingHere = 0;

  for (let i = 0; i < array.length; i++) {
    maxEndingHere = maxEndingHere + array[i];
    if (maxSoFar < maxEndingHere)
      maxSoFar = maxEndingHere;

    if (maxEndingHere < 0)
      maxEndingHere = 0;
  }
  return maxSoFar;
}

// module.exports = { maxSubarray, kadanesMaxSubarray };