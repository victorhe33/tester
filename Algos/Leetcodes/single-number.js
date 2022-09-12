//BIT MANIPULATION
//https://leetcode.com/problems/single-number/

/*
 * @param {number[]} nums
 * @return {number}
 */

// time - O(n)
// space O(1)

//I had to refer to a website.
//https://levelup.gitconnected.com/single-number-algorithm-7384f74422
//XOR operator
var singleNumber = function (nums) {
  return nums.reduce((accumulator, value) => accumulator ^ value)
};