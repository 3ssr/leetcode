import java.util.ArrayList;
import java.util.List;

/*
 * @lc app=leetcode.cn id=94 lang=java
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode(int x) { val = x; } }
 */

public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int x) {
        val = x;
    }
}

class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> nodes = new ArrayList<>();
        traversal(root, nodes);
        return nodes;
    }

    public void traversal(TreeNode root, List<Integer> nodes) {
        if (root == null) {
            return;
        }

        traversal(root.left, nodes);
        nodes.add(root.val);
        traversal(root.right, nodes);
    }
}
// @lc code=end
