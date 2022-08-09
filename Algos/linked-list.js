//https://leetcode.com/problems/merge-two-sorted-lists/
//You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list.The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
//EXAMPLE 1
// Input: list1 = [1, 2, 4], list2 = [1, 3, 4]
// Output: [1, 1, 2, 3, 4, 4]
//EXAMPLE 2
// Input: list1 = [], list2 = []
// Output: []
//EXAMPLE 3
// Input: list1 = [], list2 = [0]
// Output: [0]


var mergeTwoLists = function (list1, list2) {

};

var mergeTwoLists = function (list1, list2) {
  //account for edge: empty list(s)
  if (!list1 || !list2) return list1 || list2;

  let currHead;
  let cacheNode; //.val pointer1

  if (list1.val <= list2.val) {
    currHead = list1;
    cacheNode = list2;
  } else {
    currHead = list2;
    cacheNode = list1;
  }
  let currNode = currHead.next; //.next.val pointer2



  while (cacheNode) {
    // console.log(currNode.next);

    if (cacheNode.val < currNode.val) {
      let currNodeNext = currNode.next;
      currNode.next = cacheNode;
      cacheNode = currNodeNext;
    }

    currNode = currNode.next;
  }

  return currHead;
};