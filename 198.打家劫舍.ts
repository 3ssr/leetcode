/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
  if (!nums || nums.length === 0) {
    return 0
  }

  // 状态: 房号
  // 操作: 偷和不偷
  // baseCase dp[0] = 0 还没偷一间房，不会拿到钱 dp[1] 偷第一间房最大值是第一间房能拿到的钱
  // 状态转移方程 dp[i] = max(dp[i - 1] + rest, dp[i - 2] + nums[i])
  // rest代表休息，因为有限制不能连续偷
  // 偷第i间房能拿到的最高金额 = max(偷第i-1时已经拿到最大金额了, 偷最后一间房才能拿到最高金额)

  let dp: number[] = []
  dp[0] = 0
  dp[1] = nums[0]

  for (let i = 2; i <= nums.length; i++) {
    // 还没偷的房间不知道能拿多少钱
    dp.push(0)
  }

  for (let i = 2; i <= nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
  }

  return dp[nums.length]
};

// @lc code=end

