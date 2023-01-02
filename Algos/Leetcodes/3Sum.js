// https://leetcode.com/problems/3sum/

// Input: nums = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, -1, 2], [-1, 0, 1]]

var threeSum = function (nums) {
    //sort my array in place
    nums.sort((a, b) => a - b);
    //declare result array
    const result = [];

    //OUTER LOOP FOR FIRST POINTER
    for (let i = 0; i < nums.length - 2; i++) {
        //INIT TWO POINTERS
        let two = i + 1;
        let three = nums.length - 1;

        //optimization if i > 0
        if (nums[i] > 0) return result;

        //REMOVE DUPS FOR TWO
        // while (nums[two + 1] === nums[two]) two++;

        //REMOVE DUPS FOR THREE
        // while (nums[three - 1] === nums[three]) three--;

        //INNER LOOP FOR TWO, THREE POINTERS
        while (two < three) {

            //ignoring duplicate first pointers;
            if (nums[i] === nums[i - 1]) break;

            let sum = nums[i] + nums[two] + nums[three];
            // console.log(nums[i], nums[two], nums[three]);

            //if sum = target, push subset into result. two++, three--. avoid dups.
            if (sum === 0) {
                result.push([nums[i], nums[two], nums[three]])
                while (nums[two + 1] === nums[two]) two++;
                while (nums[three - 1] === nums[three]) three--;
                two++; 1
                three--;
            };

            //if sum > target
            if (sum > 0) {
                // while (nums[three - 1] === nums[three]) three--;
                three--;
            }

            //if sum < target
            if (sum < 0) {
                // while (nums[two + 1] === nums[two]) two++;
                two++;
            }
        }
    }

    return result;
};

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