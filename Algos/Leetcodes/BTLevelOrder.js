https://leetcode.com/problems/binary-tree-level-order-traversal/
//STUCK https://leetcode.com/submissions/detail/787544069/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 *
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
 */

/*
 * @param {TreeNode} root
 * @return {number[][]}
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(tree);


console.log(levelOrder(tree))


function levelOrder (root) {
  const queue = [];
  queue.push(root);
  const result = [];
  result.push([root.val]);


  while (queue.length > 0) {

    const subArray = [];
    const first = queue[0]

    if (first.left) {
      subArray.push(first.left.val);
      queue.push(first.left)
    }
    if (first.right) {
      subArray.push(first.right.val);
      queue.push(first.right)
    }
    if (subArray.length) result.push(subArray);
    queue.shift();
  }
  return result;
};

