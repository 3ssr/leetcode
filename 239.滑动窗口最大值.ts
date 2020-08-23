/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
  if (!nums || nums.length === 0 || nums.length === 1) {
    return nums
  }

  let left: number[] = []
  let right: number[] = []

  for (let i = 0; i < nums.length; i++) {
    if (i % k === 0) {
      left[i] = nums[i]
    } else {
      left[i] = Math.max(left[i - 1], nums[i])
    }

    let j = nums.length - i - 1

    if (j % k === 0) {
      right[j] = nums[j]
    } else {
      right[j] = Math.max(right[j + 1], nums[j])
    }
  }

  let result: number[] = []

  for (let i = 0; i < nums.length - k + 1; i++) {
    result[i] = Math.max(left[i + k - 1], right[i])
  }

  return result
}
// @lc code=end

