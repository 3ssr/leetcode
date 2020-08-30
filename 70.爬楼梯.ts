/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  if (n === 0) {
    return 0
  }

  let dp: number[] = []
  dp[0] = 1
  dp[1] = 1
  dp[2] = 2
  dp[3] = 3

  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
};

// console.log(climbStairs(4))
// @lc code=end

