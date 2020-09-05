import java.util.ArrayList;
import java.util.List;

/*
 * @lc app=leetcode.cn id=95 lang=java
 *
 * [95] 不同的二叉搜索树 II
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
    public List<TreeNode> generateTrees(int n) {
        if (n == 0) {
            return new ArrayList<TreeNode>();
        }

        return helper(1, n);
    }

    public List<TreeNode> helper(int begin, int end) {
        List<TreeNode> nodes = new ArrayList<>();

        if (begin > end) {
            nodes.add(null);
            return nodes;
        }

        for (int i = begin; i <= end; i++) {
            List<TreeNode> leftTree = helper(begin, i - 1);
            List<TreeNode> rightTree = helper(i + 1, end);

            // 以i为root节点，能构成的二叉搜索树种数为左右子树的笛卡尔乘积
            for (TreeNode left : leftTree) {
                for (TreeNode right : rightTree) {
                    TreeNode root = new TreeNode();
                    root.val = i;
                    root.left = left;
                    root.right = right;
                    nodes.add(root);
                }
            }
        }

        return nodes;
    }
}
// @lc code=end

