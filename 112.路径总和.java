/*
 * @lc app=leetcode.cn id=112 lang=java
 *
 * [112] 路径总和
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
    public boolean hasPathSum(TreeNode root, int sum) {
        return helper(root, sum);
    }

    public boolean helper(TreeNode node, int sum) {
        if (node == null) {
            return false;
        }

        sum = sum - node.val;

        if (sum == 0 && node.left == null && node.right == null) {
            return true;
        }

        if (node.left != null && helper(node.left, sum)) {
            return true;
        }

        if (node.right != null && helper(node.right, sum)) {
            return true;
        }

        return false;
    }
}
// @lc code=end

