/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  if (!prices || prices.length === 0) {
    return 0
  }

  // 记录最大利润
  let maxProfit = 0
  // 假设买入的最低价格为第一个
  let minPrice = prices[0]

  for (let i = 1; i < prices.length; i++) {
    // 当前价格减掉最低价格即为利润，并跟最大利润比较谁大
    maxProfit = Math.max(prices[i] - minPrice, maxProfit)
    // 每次更新最低价格
    minPrice = Math.min(minPrice, prices[i])
  }

  return maxProfit
};
// @lc code=end

