/*
 * @param {number[]} arr
 * @return {number}
 * 
 */
//https://leetcode.com/problems/reduce-array-size-to-the-half/
//submission: https://leetcode.com/submissions/detail/783101796/

//STRAT -> hash # of occurences -> Sort in descending -> add counts til done we meet half.
function minSetSize (arr) {
  const hash = {};
  for (const el of arr) {
    hash[el] =  hash[el] + 1 || 1 ;
  }
  const values = Object.values(hash).sort((a, b) => b - a);
  const half = Math.floor(arr.length / 2);
  let [counter, sum] = [0, 0];
  while (sum < half) {
    sum += values[counter]
    counter++;
  }
  return counter;
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