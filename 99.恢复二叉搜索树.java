/*
 * @lc app=leetcode.cn id=99 lang=java
 *
 * [99] 恢复二叉搜索树
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

    /**
     * 莫里斯中序遍历模板代码
     * @param root
     */
    public void morrisMidOrder(TreeNode root) {
        TreeNode curr = root;

        while (curr != null) {
            if (curr.left == null) {
                curr = curr.right;
            } else {
                // 找到curr节点在中序遍历中的前驱节点
                TreeNode predecessor = findMostRight(curr);

                if (predecessor.right == null) {
                    // 让当前节点的左子树里最右边节点指向当前节点，形成环路
                    predecessor.right = curr;
                    curr = curr.left;
                } else if (predecessor.right == curr) {
                    // 证明curr的左子树已经处理完成，断开我们加上的环路
                    predecessor.right = null;
                    curr = curr.right;
                }
            } 
        } 
    }

    public void recoverTree(TreeNode root) {
        TreeNode x = null, y = null, prevNode = null;
        TreeNode curr = root;

        while (curr != null) {
            if (curr.left == null) {
                if (prevNode != null && prevNode.val > curr.val) {
                    x = curr;

                    if (y == null) {
                        y = prevNode;
                    }
                }
                prevNode = curr;
                curr = curr.right;
            } else {
                TreeNode predecessor = findMostRight(curr);

                if (predecessor.right == null) {
                    predecessor.right = curr;
                    curr = curr.left;
                } else if (predecessor.right == curr) {
                    if (prevNode != null && prevNode.val > curr.val) {
                        x = curr;

                        if (y == null) {
                            y = prevNode;
                        }
                    }
                    prevNode = curr;
                    predecessor.right = null;
                    curr = curr.right;
                }
            } 
        } 

        if (x != null && y != null) {
            int t = x.val;
            x.val = y.val;
            y.val = t;
        }
    }

    /**
     * 找到节点在中序遍历中的前驱节点
     * 找到树上最右边的节点
     * @param node
     * @return
     */
    public TreeNode findMostRight(TreeNode node) {
        TreeNode predecessor = node;

        if (predecessor.left != null) {
            predecessor = predecessor.left;

            while (predecessor.right != null && predecessor.right != node) {
                predecessor = predecessor.right;
            }
        }

        return predecessor;
    }
}
// @lc code=end

