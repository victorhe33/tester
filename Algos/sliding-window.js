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

//"abcabcbb"
//SLIDING WINDOW - Dynamic window size, with use of an auxillary structure
//SLIDING WINDOW - with dynamic length, and accessory Object
// var lengthOfLongestSubstring = function (s) {
//   let maxLength = 0;
//   let tempLength = 0;
//   let hash = {};
//   let startIdx = 0;

//   for (let i = 0; i < s.length; i++) {
//     let currChar = s[i];
//     //if our hash doesn't contain currChar, add to hash. add to tempLength;
//     if (!hash[currChar]) {
//       hash[currChar] = true;
//       tempLength++;
//       //check our length vs max Length;
//       if (tempLength > maxLength) maxLength = tempLength;
//       //else we are encountering a repeat, so traverse front of string dec tempLength Counter and remove corresponding hash values. 
//     } else {
//       while (hash[currChar]) {
//         //delete corresponding hash
//         delete hash[s[startIdx]];
//         //increment start counter;
//         startIdx++;
//         //decrement length counter
//         tempLength--;
//       }
//       //now we can save the currChar and increment after shortening our front strength.
//       hash[currChar] = true;
//       tempLength++;
//       //check our length vs max Length;
//       if (tempLength > maxLength) maxLength = tempLength;
//     }
//   }
//   return maxLength;
// }

//Change to a map obj for hash.
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let tempLength = 0;
  let hash = {};
  let startIdx = 0;

  for (let i = 0; i < s.length; i++) {
    let currChar = s[i];
    //if our hash doesn't contain currChar, add to hash. add to tempLength;
    if (!hash[currChar]) {
      hash[currChar] = true;
      tempLength++;
      //check our length vs max Length;
      if (tempLength > maxLength) maxLength = tempLength;
      //else we are encountering a repeat, so traverse front of string dec tempLength Counter and remove corresponding hash values. 
    } else {
      while (hash[currChar]) {
        //delete corresponding hash
        delete hash[s[startIdx]];
        //increment start counter;
        startIdx++;
        //decrement length counter
        tempLength--;
      }
      //now we can save the currChar and increment after shortening our front strength.
      hash[currChar] = true;
      tempLength++;
      //check our length vs max Length;
      if (tempLength > maxLength) maxLength = tempLength;
    }
  }
  return maxLength;
}

let string = "abcabcbb";

console.log(lengthOfLongestSubstring(string))