/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return []
  }

  let nodes = [root]
  let level = 0
  let result: number[][] = []

  while (nodes.length !== 0) {
    let temp: any[] = []

    while (nodes.length > 0) {
      let node = nodes.shift()

      if (node) {
        temp.push(node.left)
        temp.push(node.right)

        if (!result[level]) {
          result[level] = []
        }

        result[level].push(node.val)
      }
    }

    level++
    nodes = temp
  }

  return result
};
// @lc code=end

