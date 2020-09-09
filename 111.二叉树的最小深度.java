/*
 * @lc app=leetcode.cn id=111 lang=java
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

class Solution {
    public int minDepth(TreeNode root) {
        return helper(root);
    }

    public int helper(TreeNode node) {
        if (node == null) {
            return 0;
        }

        int leftHeight = helper(node.left);
        int rightHeight = helper(node.right);

        return (leftHeight != 0 && rightHeight != 0) ? Math.min(leftHeight, rightHeight) + 1 : leftHeight + rightHeight + 1;
    }
}
// @lc code=end

