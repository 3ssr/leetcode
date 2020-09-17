import java.util.Random;

/*
 * @lc app=leetcode.cn id=1206 lang=java
 *
 * [1206] 设计跳表
 */

// @lc code=start
class Skiplist {

    // 每一层有64个节点
    Node[] stack = new Node[64];
    Random rand = new Random();
    Node head = null;

    class Node {
        int val;
        Node next;
        Node down;

        Node(int val, Node next, Node down) {
            this.val = val;
            this.next = next;
            this.down = down;
        }
    }

    public Skiplist() {
        head = new Node(-1, null, null);
    }
    
    public boolean search(int target) {
        Node curr = head;
        while (curr != null) {
            // 在一个层级上查找
            while (curr != null && curr.val < target) {
                curr = curr.next;
            }

            if (curr.val == target) {
                return true;
            }
            // 进入下一层
            curr = curr.down;
        }

        return false;
    }

    public void add(int num) {
        // 初始level
        int level = 0;
        Node curr = head;
        while (curr != null) {
            // 在一个层级上查找
            while (curr != null && curr.val < num) {
                curr = curr.next;
            }

            stack[level] = curr;
            level++;
            // 进入下一层
            curr = curr.down;
        }

        // 是否向上插入
        boolean insertUp = true;
        Node downNode = null;
        while (insertUp && level > 0) {
            Node insertNode = stack[level--];
            insertNode.next = new Node(num, insertNode.next, downNode);
            downNode = insertNode.next;
            // 猜硬币是否往上插入
            insertUp = (rand.nextInt() & 1) == 0;
        }

        if (insertUp) {
            Node newHead = new Node(num, null, downNode);
            head = new Node(-1, newHead, head);
        }
    }
    
    public boolean erase(int num) {
        boolean exists = false;
        Node curr = head;

        if (curr.val == num) {
            head = curr.next;
            return true;
        }

        while (curr != null) {
            // 在一个层级上查找
            while (curr.next != null && curr.next.val < num) {
                curr = curr.next;
            }

            if (curr.next != null && curr.next.val == num) {
                exists = true;
                curr.next = curr.next.next;
            }
            // 进入下一层
            curr = curr.down;
        }

        return exists;
    }
}

/**
 * Your Skiplist object will be instantiated and called as such:
 * Skiplist obj = new Skiplist();
 * boolean param_1 = obj.search(target);
 * obj.add(num);
 * boolean param_3 = obj.erase(num);
 */
// @lc code=end

