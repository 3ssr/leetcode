/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  let result = nums[0]

  for (let i = 1; i < nums.length; i++) {
    result = result ^ nums[i]
  }

  return result
};
// @lc code=end

