// https://leetcode.com/problems/3sum/

// Input: nums = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, -1, 2], [-1, 0, 1]]

var threeSum = function (nums) {
  nums.sort((a, b) => a-b);
  const result = [];
  if (nums.length < 3) return result;
  console.log(nums)

  for (let i = 0; i < nums.length - 2; i++) {
    const first = nums[i];
    const remainder = 0 - nums[i]
    console.log(first);
    console.log(remainder)
    const B = i + 1;
    const C = nums.length - 1;
    while ()
  }  
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])) //[[-1, -1, 2], [-1, 0, 1]]

/*  
var threeSum = function(nums) {
    nums.sort((a,b) => a - b);
    const result = [];
    // account for num.length < 3, just return result;
    if (nums.length < 3) return result;

    //declare 3 pointers
    let A = 0;
    let B = 1;
    let C = nums.length - 1;

    while (A < (nums.length - 2)) {
        //take care of dups by advancing A,B pointers, restart our while loop
        if (nums[A] === nums[A + 1]) {
            A++;
            B = A + 1;
            continue;
        }

        const sum = nums[A] + nums[B] + nums[C];
        //sum equals to target.
        if (sum === 0) {
            result.push([nums[A], nums[B], nums[C]]);
            A++;
            B = A + 1;
            C--;
             //sum less then target.
        } else if (sum < 0) {
            B++;
               //sum greater then target.
        } else if (sum > 0) {
            C--;
        }

        //end of subarray with B pointer, 
        // A != B != C
        // B = C - 1 -> increment A, reset B
        // C = B + 1
    }

    return result;
};

//  -3 < 0
// [-4, -1, -1, 0, 1, 2]
//   ^   ^            ^
//   I   J            K
// sort input array
// check for duplicate subarrays/integer sets
// 3 pointers
// depending on
    //sum = target
        //add subset to results, unless its a dup
    //sum < target
        //move B pointer to right (j++)
    //sum > target
        //move C/K pointer to left (K--)
//return results array;

*/