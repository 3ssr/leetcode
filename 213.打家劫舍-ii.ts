/*
 * @lc app=leetcode.cn id=213 lang=typescript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
function rob(nums: number[]): number {
  if (!nums || nums.length === 0) {
    return 0
  }

  if (nums.length === 1) {
    return nums[0]
  }

  // 状态: 房号
  // 操作: 偷和不偷
  // baseCase dp[0] = 0 还没偷一间房，不会拿到钱 dp[1] 偷第一间房最大值是第一间房能拿到的钱
  // 状态转移方程 dp[i] = max(dp[i - 1] + rest, dp[i - 2] + nums[i - 2])
  // rest代表休息，因为有限制不能连续偷
  // 偷第i间房能拿到的最高金额 = max(偷第i-1时已经拿到最大金额了, 偷最后一间房才能拿到最高金额)

  // let dp: number[] = []
  // dp[0] = 0
  // dp[1] = nums[0]
  // dp[2] = Math.max(nums[0], nums[1])
  // dp[3] = Math.max(nums[0], nums[1])
  // dp[4] = Math.max(nums[0] + nums[2], nums[1] + nums[3])
  // dp[5] = Math.max(nums[0] + nums[2], nums[1] + nums[3])
  
  // 抢第一个
  let dp1: number[] = []
  dp1[0] = 0
  dp1[1] = nums[0]

  for (let i = 2; i <= nums.length; i++) {
    // 还没偷的房间不知道能拿多少钱
    dp1.push(0)
  }


  // 不抢第一个
  let dp2: number[] = []
  dp2[0] = 0
  dp2[1] = 0
  dp2[2] = nums[1]

  for (let i = 3; i <= nums.length; i++) {
    // 还没偷的房间不知道能拿多少钱
    dp2.push(0)
  }

  for (let i = 2; i <= nums.length - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + nums[i - 1])
  }

  for (let i = 3; i <= nums.length; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i - 1])
  }

  // console.log(dp1)
  // console.log(dp2)

  return Math.max(dp1[nums.length - 1], dp2[nums.length])
};

// rob([1,2,3,1])
// @lc code=end

