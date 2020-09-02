/*
 * @lc app=leetcode.cn id=96 lang=java
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
class Solution {
    public int numTrees(int n) {
        // 状态 节点数
        // 选择 选择哪个节点作为根节点
  
        // 状态转移方程
        // dp(n) 使用n个节点，能组成的二叉搜索树种数
        // f(i, n) 使用i节点为根，能组成长度为n的二叉搜索树种数
        // dp(n) = sum(f(i, n)), i属于1到n
        // f(i, n) = dp(i - 1) * dp(n - i)
        // dp(n) = sum(dp(i - 1) * dp(n - i)), i属于1到n

        // baseCase 
        // dp[0] = 0
        // dp[1] = 1
        // dp[2] = 2
        // dp[3] = 5

        int[] dp = new int[n + 1];
        dp[0] = 1;
        dp[1] = 1;

        for (int i = 2; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                dp[i] += dp[j - 1] * dp[i - j];
            }
        }

        return dp[n];
    }
}
// @lc code=end

