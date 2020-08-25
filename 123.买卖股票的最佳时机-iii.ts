/*
 * @lc app=leetcode.cn id=123 lang=typescript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  if (!prices || prices.length === 0) {
    return 0
  }

  let minPrice = prices[0]
  let profit = 0
  let transactionCount = 0
  // 是否正在交易中
  let inTransaction = false

  for (let i = 1; i < prices.length; i++) {
    if (transactionCount === 2) {
      break
    }

    let price = prices[i]

    if (price < minPrice && !inTransaction) {
      // 买入
      minPrice = price
      inTransaction = true
    }

    if (price > minPrice && inTransaction) {
      // 卖出
      profit += price - minPrice
      transactionCount++
      inTransaction = false
      minPrice = price
    }
  }

  return profit
};
// @lc code=end

