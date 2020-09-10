import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.stack;
import java.util.Stack;

/*
 * @lc app=leetcode.cn id=113 lang=java
 *
 * [113] 路径总和 II
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
    List<List<Integer>> list = new ArrayList<>();
    LinkedList<Integer> path = new LinkedList<>();

    public List<List<Integer>> pathSum(TreeNode root, int sum) {
        dfs(root, sum);
        return list;
    }

    public void dfs(TreeNode node, int sum) {
        if (node == null) {
            return;
        }

        path.add(node.val);
        sum -= node.val;

        if (sum == 0 && node.left == null && node.right == null) {
            list.add(new ArrayList<>(path));
        }

        dfs(node.left, sum);
        dfs(node.right, sum);
        path.removeLast();
    }
}
// @lc code=end

