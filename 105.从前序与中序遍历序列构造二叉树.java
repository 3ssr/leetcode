import javax.swing.tree.TreeNode;

/*
 * @lc app=leetcode.cn id=105 lang=java
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
    int pre = 0, in = 0;

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        return helper(preorder, inorder, Integer.MAX_VALUE);
    }

    public TreeNode helper(int[] preorder, int[] inorder, int stop) {
        if (pre == preorder.length) {
            System.out.println("retrun 1");
            return null;
        }

        if (inorder[in] == stop) {
            System.out.printf("in = %d stop = %d\n", in, stop);
            in++;
            return null;
        }

        int rootVal = preorder[pre];
        pre++;
        TreeNode root = new TreeNode(rootVal);
        root.left = helper(preorder, inorder, rootVal);
        root.right = helper(preorder, inorder, stop);

        System.out.printf(
            "rootVal = %d left = %d right = %d\n", 
            rootVal, root.left != null ? root.left.val : -1, root.right != null ? root.right.val : -1
        );

        return root;
    }
}
// @lc code=end

