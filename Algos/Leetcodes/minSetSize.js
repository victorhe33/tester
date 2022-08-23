/*
 * @param {number[]} arr
 * @return {number}
 * 
 */
//https://leetcode.com/problems/reduce-array-size-to-the-half/

function minSetSize (arr) {
  const hash = {};
  for (const el of arr) {
    hash[el] =  hash[el] + 1 || 1 ;
    console.log(el);
  }
  console.log(hash);
  return 4;
};

console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7])); //-> 2

/*
Input: arr = [3,3,3,3,5,5,5,2,2,7]
Output: 2

hash = {
  2: 2,
  3: 4,
  5: 3,
  7: 1
}

[2, 4, 3, 1]

10 is total.
we need 5 or less
now we need to do combinations to find the lowest number of integers possible.

*/