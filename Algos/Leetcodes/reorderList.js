// https://leetcode.com/problems/reorder-list/submissions/900515562/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

// CAN BE REFACTORED FOR SPACE EFFICIENCY... related to zipper merge and reverse linked list..
var reorderList = function (head) {
  // move everything into an array
  let curr = head;
  const array = [];
  while (curr) {
    array.push(curr);
    curr = curr.next;
  }

  if (array.length <= 2) return head;

  let a = array[0];
  let b = array[1];
  let prev = array[array.length - 2];
  let target = array[array.length - 1];
  // iterate through my list, add nodes to be moved to an array
  // 4 pointer strategy
  while (b && b.next) {
    // do the switch a roo.
    a.next = target
    target.next = b;
    prev.next = null;
    // move target pointer to last one
    array.pop()
    target = array[array.length - 1]
    // move my previous back one.
    prev = array[array.length - 2]
    //  a is set same as b
    a = b
    // b is b.next 
    b = b.next
    // stop iteration when... prev <= b
  }
  return head;
};
// Math.floor((length - 1) / 2)
// [1] -> [1]
// [1][2] -> [1][2] (number of placements = length - 2)
// [1][2][3] -> [1][3][2]  3 -> 1 
// [1,2,3,4] -> [1,4,2,3]  4 -> 1

// [1,2,3,4,5] -> [1,5,2,4,3] 5 -> 2
//  ^ ^     ^      ^   ^
// 1.next (a) => 5 (target)
// 5.next  => 2 (b)
// 4.next (prev) => null
// [1, 6, 2,5, 3,4, ,   ] 6 -> 2
// [1, 7, 2, 6, 3,5 4, , , ] 7 -> 3
// 8 -> 3