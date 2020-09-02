import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

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
        Stack<TreeNode> stack = new Stack<>();
        TreeNode curr = root;

        // 循环中序遍历的关键在于借助栈，将左子树先入栈
        while (curr != null || !stack.isEmpty()) {
            // 左子树不为空，统统塞到栈里
            while (curr != null) {
                stack.push(curr);
                curr = curr.left;
            }

            // 左子树处理完了，添加当前元素，并将当前节点指向右子树
            curr = stack.pop();
            nodes.add(curr.val);
            curr = curr.right;
        }

        return nodes;
    }

    public List<Integer> inorderTraversal2(TreeNode root) {
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
