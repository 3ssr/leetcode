/*
 * @lc app=leetcode.cn id=450 lang=java
 *
 * [450] 删除二叉搜索树中的节点
 */

// @lc code=start
/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode(int x) { val = x; } }
 */
class Solution {
    public TreeNode deleteNode(TreeNode root, int key) {
        if (root == null) {
            return null;
        }

        if (root.val == key) {
            // 叶子节点, 或者是只有一个子节点
            if (root.left == null) {
                return root.right;
            }

            if (root.right == null) {
                return root.left;
            }

            // 有两个子节点，需要找到交换当前节点和右子树的最小节点的位置，然后删除节点
            TreeNode minNode = getMinNode(root.right);
            root.val = minNode.val;
            root.right = deleteNode(root.right, minNode.val);
        }

        if (key < root.val) {
            root.left = deleteNode(root.left, key);
        }

        if (key > root.val) {
            root.right = deleteNode(root.right, key);
        }

        return root;
    }

    public TreeNode getMinNode(TreeNode node) {
        while (node.left != null) {
            node = node.left;
        }

        return node;
    }
}
// @lc code=end
