/*
 * @lc app=leetcode.cn id=518 lang=typescript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
function change(amount: number, coins: number[]): number {
  if (amount === 0) {
    return 1
  }

  if (!coins || coins.length === 0) {
    return 0
  }

  // baseCase: dp[0] = 1 凑零元不需要硬币算为一种解法
  // 状态: amoun
  // 操作: 任取一个面值的硬币
  // dp[n] = sum(dp[n - coin])
  // 用k面值的硬币组成n金额的组合数 
  // = 用k面值的硬币组成(n-coin)的组合数 + 用k面值的硬币组成coin的组合数

  let dp: number[] = []
  dp[0] = 1

  for (let i = 1; i <= amount; i++) {
    dp.push(0)
  }

  for (const coin of coins) {
    for (let i = 1; i <= amount; i++) {
      if (i < coin) {
        continue
      }

      dp[i] = dp[i] + dp[i - coin]
      console.log(dp)
    }
  }

  return dp[amount]
};
// @lc code=end

