/*
 * @lc app=leetcode.cn id=106 lang=java
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
    int in, post;
    public TreeNode buildTree(int[] inorder, int[] postorder) {
        post = postorder.length - 1;
        in = inorder.length - 1;

        return helper(inorder, postorder, Integer.MAX_VALUE);
    }

    private TreeNode helper(int[] inorder, int[] postorder, int stop) {
        if (post < 0) {
            return null;
        }

        if (inorder[in] == stop) {
            in--;
            return null;
        }

        int rootVal = postorder[post];
        post--;
        TreeNode root = new TreeNode(rootVal);

        // 后续遍历是先左子树后右子树再自己
        // 由于post指针是从右往左走，所以post会先指向右子树的节点
        root.right = helper(inorder, postorder, rootVal);
        root.left = helper(inorder, postorder, stop);

        return root;
    }
}
// @lc code=end

