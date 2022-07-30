// //BRUTE FORCE via nested loops
// var lengthOfLongestSubstring = function (s) {
//   // if (s.length === 1) return 1;
//   let maxLength = 0;

//   for (let i = 0; i < s.length; i++) {
//     let substring = {};
//     let currCount = 0;

//     for (let j = i; j < s.length; j++) {
//       let char = s[j];
//       if (!substring[char]) {
//         substring[char] = true;
//         currCount = currCount + 1;
//         console.log(substring)
//         if (currCount > maxLength) maxLength = currCount;
//       } else {
//         break;
//       }
//     }
//   }

//   return maxLength;
// };

//SLIDING WINDOW
var lengthOfLongestSubstring = function (s) {
  return 1;
}

let string = "abcabcbb";

console.log(lengthOfLongestSubstring(string))