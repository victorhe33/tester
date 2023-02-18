//https://leetcode.com/problems/maximum-subarray/submissions/900548676/

//COMPLEXITY Time-n Space-1
var maxSubArray = function (nums) {
  let largestSum = nums[0];
  let currSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currSum = currSum + nums[i]
    if (nums[i] > currSum) currSum = nums[i];
    if (currSum > largestSum) largestSum = currSum;
  }

  return largestSum;
}