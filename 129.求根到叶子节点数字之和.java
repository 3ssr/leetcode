import javax.swing.tree.TreeNode;

/*
 * @lc app=leetcode.cn id=129 lang=java
 *
 * [129] 求根到叶子节点数字之和
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
    public int sumNumbers(TreeNode root) {
        return dfs(root, 0);
    }

    public int dfs(TreeNode node, int sum) {
        if (node == null) {
            return sum;
        }

        sum = sum * 10 + node.val;

        if (node.left == null && node.right == null) {
            return sum;
        }

        int leftValue = 0;
        if (node.left != null) {
            leftValue = dfs(node.left, sum);
        }
        
        int rightValue = 0;
        if (node.right != null) {
            rightValue = dfs(node.right, sum);
        }

        return leftValue + rightValue;
    }
}
// @lc code=end

