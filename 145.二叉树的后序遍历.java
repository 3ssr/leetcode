import java.util.LinkedList;
import java.util.List;
import java.util.Stack;

import javax.swing.tree.TreeNode;

/*
 * @lc app=leetcode.cn id=145 lang=java
 *
 * [145] 二叉树的后序遍历
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
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        Stack<TreeNode> stack = new Stack<>();
        
        if (root != null) {
            stack.add(root);
        }

        while (!stack.isEmpty()) {
            TreeNode node = stack.pop();

            if (node != null) {
                stack.add(node);
                // 关键，利用null来标记上面的节点已经使用了
                stack.add(null);
                
                if (node.right != null) {
                    stack.add(node.right);
                }

                if (node.left != null) {
                    stack.add(node.left);
                }
            } else {
                // null节点pop出来后，再pop出来的节点就是需要处理的节点
                TreeNode top = stack.pop();
                res.add(top.val);
            }
        }

        return res;
    }
}
// @lc code=end

