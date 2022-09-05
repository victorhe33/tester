// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/*
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 * 
 * 
 
Input: root = [1,2,5,3,4,null,6]
Output: [1,null,2,null,3,null,4,null,5,null,6]

*/

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(tree);

// const array = [];

//NAIVE SOLUTION USING A QUEUE + depth first pre traversal
// https://leetcode.com/submissions/detail/791601830/

// var flatten = function (root) {
//   const array = [];

//   (function helper(root) {
//     if (!root) return null;
//     array.push(root);
//     helper(root.left);
//     helper(root.right);
//   })(root);

//   while (array.length) {
//     const node = array.shift();
//     console.log(node)
//     node.left = null;
//     node.right = array[0];
//   }
// };

// flatten(tree)

// console.log(tree);

//REFACTORED SOLUTION USING iterative depth first pre traversal + dummy node.
https://leetcode.com/problems/flatten-binary-tree-to-linked-list/submissions/


var flatten = function (root) {
  if (!root) return null;
  let stack = [ root ];
  let prev = new TreeNode(-1);
  
  while(stack.length){
    let curr = stack.pop();
    
    if(curr.right) stack.push(curr.right);
    if(curr.left) stack.push(curr.left);

    prev.right = curr;
    prev.left = null;
    prev = curr;
  }
};

flatten(tree);
console.log(tree)