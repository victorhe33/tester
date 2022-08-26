//https://leetcode.com/problems/move-zeroes/
//from Josh

/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

*/

// function moveZeroes (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let curr = nums[i];
//     if (nums[i] === 0) {
//       let count = i;
//       while(count < nums.length -1) {
//         let next = nums[count + 1]
//         nums[count + 1] = nums[count];
//         nums[count] = next;
//         count++;   
//       }
//     }
//   }
//   let condition = false;
//   for (element of nums) {
//     if (element === 0) condition = true;
//     if (condition && element !== 0) return moveZeroes(nums);
//   }
//  return nums;
// };

function moveZeroes(nums) {
  let count = 0;

  (function helper(input) {
    for (let i = 0; i < input.length; i++) {
      if (nums[i] === 0) {
        nums.splice(i, 1);
        count++;
        return helper(input);
      }
    }
  })(nums)

  for (let j = 0; j < count; j++) {
    nums.push(0);
  }

  return nums;
};

// console.log(moveZeroes([0, 1, 0, 3, 12]))
console.log(moveZeroes([0, 0, 1])) //-> [1,3,12,0,0]

//JOSH (snowball)
// function moveZeroes(nums) {
//   let snowBallSize = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) snowBallSize++;
//     else if (snowBallSize > 0) {
//       [nums[i], nums[i - snowBallSize]] = [nums[i - snowBallSize], nums[i]];
//       nums[i] = 0;
//     }
//   }
// };