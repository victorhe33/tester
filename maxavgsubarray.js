//https://leetcode.com/problems/maximum-average-subarray-i/submissions/
//https://leetcode.com/submissions/detail/756724107/

function findMaxAverage (nums, k) {
  if (k === 1) {
    return nums.sort()[nums.length - 1];
  }
  //make a result var to reassign to larger averages.
  let resultArray = nums.slice(0, k);
  let result = resultArray.reduce((prev, curr) => prev + curr) / k;
  let subAvg = result;


  for (let i = 0; i < nums.length - k; i++) {
    subAvg = (((subAvg * k) - nums[i]) + nums[i + k]) / k;
    if (subAvg > result) result = subAvg;
  }

  return result;
};

// const test = [1, 12, -5, -6, 50, 3];
const test2 = [4, 2, 1, 3, 3];
console.log(findMaxAverage(test2, 2));