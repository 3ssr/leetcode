/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
  if (amount === 0) {
    return 0
  }

  if (!coins || coins.length === 0) {
    return -1
  }

  // baseCase: dp[0] = 0
  // 状态: amount
  // 操作: 任取一个面值的硬币
  // dp[n] = min(dp[n - coin]) + 1
  // 求组成n金额的最少硬币数 = 求组成(n - coin)金额的最少硬币数 + 1

  let dp: number[] = []
  dp[0] = 0

  for (let i = 1; i <= amount; i++) {
    // amount + 1 在这可以等同于无穷大
    dp.push(amount + 1)
  }

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      // 要凑的金额比当前硬币面值小，
      if (i < coin) {
        continue
      }

      dp[i] = Math.min(dp[i - coin] + 1, dp[i])
    }
  }

  return dp[amount] === amount + 1 ? -1 : dp[amount]
};

// @lc code=end

