/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  let cache: { [key: number]: number } = {}

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index]
    const value = target - num

    if (cache[value] !== undefined) {
      return [cache[value], index]
    }

    cache[num] = index
  }

  throw new Error('找不到')
};
// @lc code=end
