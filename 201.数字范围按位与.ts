/*
 * @lc app=leetcode.cn id=201 lang=typescript
 *
 * [201] 数字范围按位与
 */

// @lc code=start
function rangeBitwiseAnd(m: number, n: number): number {
  let shift = 0

  while (m < n) {
    m >>= 1
    n >>= 1
    shift++
  }

  return m << shift
};
// @lc code=end

