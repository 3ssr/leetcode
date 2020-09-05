/*
 * @lc app=leetcode.cn id=100 lang=java
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        return order(p, q);
    }

    public boolean order(TreeNode p, TreeNode q) {
        if (p == null) {
            return q == null;
        }

        if (q == null) {
            return p == null;
        }

        if (p.val != q.val) {
            return false;
        }

        if (!order(p.left, q.left)) {
            return false;
        }

        if (!order(p.right, q.right)) {
            return false;
        }

        return true;
    }
}
// @lc code=end

