import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;

/*
 * @lc app=leetcode.cn id=239 lang=java
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
class Solution {

    class MonotonicQueue {
        ArrayDeque<Integer> queue = new ArrayDeque<>();

        public int max() {
            return queue.getFirst();
        }

        /**
         * 进队时, 压扁在它前面比它小的所有数, 也就是把比他小的都出队
         * @param num
         */
        public void push(int num) {
            while (!queue.isEmpty() && queue.getLast() < num) {
                queue.removeLast();
            }

            queue.addLast(num);
        }

        /**
         * 出队时, 如果出队的元素是队头最大元素,才需要出列
         * 比队头最大值 小的元素, 如果是比队头先进的队, 在队头进队时已被压扁,
         * 如果是比队头晚进的队, 从时机上不可能比队头先被pop掉
         * @param index
         */
        public void pop(int num) {
            if (!queue.isEmpty() && queue.getFirst() == num) {
                queue.removeFirst();
            }
        }
    }

    public int[] maxSlidingWindow(int[] nums, int k) {
        if (nums == null || nums.length == 0) {
            return null;
        }

        if (nums.length == 1) {
            return nums;
        }

        MonotonicQueue queue = new MonotonicQueue();
        List<Integer> result = new ArrayList<>();

        for (int i = 0; i < nums.length; i++) {
            if (i < k - 1) {
                queue.push(nums[i]);
            } else {
                queue.push(nums[i]);
                result.add(queue.max());
                queue.pop(nums[i - k + 1]);
            }
        }

        return result.stream().mapToInt(Integer::valueOf).toArray();
    }
}
// @lc code=end

