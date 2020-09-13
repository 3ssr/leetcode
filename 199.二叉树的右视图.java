import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

/*
 * @lc app=leetcode.cn id=199 lang=java
 *
 * [199] 二叉树的右视图
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
    public List<Integer> rightSideView(TreeNode root) {
        return bfs(root);
    }

    public List<Integer> bfs(TreeNode node) {
        List<Integer> nums = new ArrayList<>();
        if (node == null) {
            return nums;
        }

        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(node);

        while (!queue.isEmpty()) {
            int size = queue.size();

            while (size > 0) {
                TreeNode top = queue.poll();
                if (top.left != null) {
                    queue.add(top.left);
                }
                if (top.right != null) {
                    queue.add(top.right);
                }

                size--;

                if (size == 0) {
                    nums.add(top.val);
                }
            }
        }

        return nums;
    }
}
// @lc code=end

