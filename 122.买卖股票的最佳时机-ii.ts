/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  if (!prices || prices.length === 0) {
    return 0
  }

  let profit = 0

  // 今天价格比昨天大就卖出， 比昨天小就买入
  for (let i = 0; i < prices.length - 1; i++) {
    let yesterdayPrice = prices[i]
    let todayPrice = prices[i + 1]

    // 卖出增加收益
    if (todayPrice > yesterdayPrice) {
      profit += (todayPrice - yesterdayPrice)
    }
  }

  return profit
};
// @lc code=end

