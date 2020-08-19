/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//     }
// }

/** 
 * 迭代写法
*/
function check1(root: TreeNode | null) {
  if (!root) {
    return true
  }

  if (!root.left && !root.right) {
    return true
  }

  let nodes = [root.left, root.right]

  while (nodes.length !== 0) {
    let node1 = nodes.shift()
    let node2 = nodes.shift()

    if (!node1 && !node2) {
      continue
    }

    if (!node1 || !node2 || node1.val !== node2.val) {
      return false
    }

    // 重点来了
    nodes.push(node1.left)
    nodes.push(node2.right)
    nodes.push(node1.right)
    nodes.push(node2.left)
  }

  return true
}

function check2(node1: TreeNode | null, node2: TreeNode | null): boolean {
  if (!node1 && !node2) {
    return true
  }

  if (!node1 || !node2) {
    return false
  }

  return node1.val === node2.val && check2(node1.left, node2.right) && check2(node1.right, node2.left)
}

function isSymmetric(root: TreeNode | null): boolean {
  // return check1(root)
  return check2(root, root)
};
// @lc code=end

