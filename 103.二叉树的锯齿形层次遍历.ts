/*
 * @lc app=leetcode.cn id=103 lang=typescript
 *
 * [103] 二叉树的锯齿形层次遍历
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return []
  }

  let level = 0
  let result: number[][] = []
  let nodes: any[] = [root]

  while (nodes.length !== 0) {
    let temp: any[] = []

    while (nodes.length > 0) {
      let node = nodes.pop()

      if (node) {
        if (!result[level]) {
          result[level] = []
        }

        result[level].push(node.val)

        if (level % 2 === 0) {
          temp.push(node.left)
          temp.push(node.right)
        } else {
          temp.push(node.right)
          temp.push(node.left)
        }
      }
    }

    level++
    nodes = temp
  }

  return result
};
// @lc code=end

