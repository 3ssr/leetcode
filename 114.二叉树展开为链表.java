import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

/*
 * @lc app=leetcode.cn id=114 lang=java
 *
 * [114] 二叉树展开为链表
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
    public void flatten(TreeNode root) {
        TreeNode curr = root;

        while (curr != null) {
            if (curr.left != null) {
                // 指向下一个操作的节点
                TreeNode next = curr.left;
                // pre的起始位置跟next一样，需要它走到最右边的节点
                TreeNode pre = next;

                while (pre.right != null) {
                    pre = pre.right;
                }

                pre.right = curr.right;
                curr.right = next;
                // 左边断掉
                curr.left = null;
            }

            curr = curr.right;
        } 
    }
}
// @lc code=end
