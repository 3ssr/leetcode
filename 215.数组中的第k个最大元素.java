import java.util.PriorityQueue;

/*
 * @lc app=leetcode.cn id=215 lang=java
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();

        for (Integer i : nums) {
            minHeap.add(i);

            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }

        return minHeap.peek();
    }
}
// @lc code=end

