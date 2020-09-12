import java.util.LinkedList;
import java.util.Queue;

/*
 * @lc app=leetcode.cn id=116 lang=java
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {}
    
    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
};
*/

// class Node {
//     public int val;
//     public Node left;
//     public Node right;
//     public Node next;

//     public Node() {}
    
//     public Node(int _val) {
//         val = _val;
//     }

//     public Node(int _val, Node _left, Node _right, Node _next) {
//         val = _val;
//         left = _left;
//         right = _right;
//         next = _next;
//     }
// }

class Solution {
    public Node connect(Node root) {
        if (root == null) {
            return null;
        }
        
        Queue<Node> queue = new LinkedList<>();
        queue.add(root);
        while (!queue.isEmpty()) {
            // 每次取一层的节点
            int size = queue.size();
            Node pre = null;

            while (size-- > 0) {
                Node node = queue.poll();
                if (node.left != null) {
                    queue.add(node.left);
                }
                if (node.right != null) {
                    queue.add(node.right);
                }

                if (pre == null) {
                    pre = node;
                } else {
                    pre.next = node; 
                    pre = pre.next;
                }
            }
        }

        return root;
    }
}
// @lc code=end

