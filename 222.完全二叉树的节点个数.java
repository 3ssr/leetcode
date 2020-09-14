/*
 * @lc app=leetcode.cn id=222 lang=java
 *
 * [222] 完全二叉树的节点个数
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
    int count = 0;
    public int countNodes(TreeNode root) {
        if (root == null) {
            return 0;
        }

        // 树的深度
        int depth = depth(root);
        // 倒数第二层的深度
        int depth2 = depth - 1;

        int start = 1, end = (1 << depth2);

        while (start <= end) {
            int mid = start + ((end - start) >> 1);
            if (isExistNode(root, mid, depth2)) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        // 除去最后一层的节点数 + 最后一层的节点数
        return (1 << depth2) - 1 + (start - 1);
    }

    /**
     * 判断树的最后一层的index位置上是否有节点
     * @param root
     * @param index
     * @param depth 倒数第二层的深度，则最后一层的节点最大个数为2的depth次方
     * @return
    */
    private boolean isExistNode(TreeNode root, int index, int depth) {
        // 找到index节点
        TreeNode curr = root;
        while (depth > 0) {
            // 分割线的位置在2的depth次方除以2的位置
            int splitLine = ((1 << depth) >> 1);

            // index和分界线的比较决定curr往左走还是往右走
            if (index > splitLine) {
                curr = curr.right;
                // 取index跟分界线的差值，可以得到在右子树里index的新位置
                index -= splitLine;
            } else {
                curr = curr.left;
            }

            depth--;
        }

        return curr != null;
    }

    public int depth(TreeNode root) {
        int levels = 0;
    	while (root != null) {
            root = root.left;
            levels += 1;
        }

        return levels;
    }
}
// @lc code=end

