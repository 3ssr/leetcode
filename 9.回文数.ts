/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }

  let revertNum = 0

  while (x > revertNum) {
    let lastNum = x % 10
    revertNum = revertNum * 10 + lastNum
    x = Math.floor(x / 10)
  }

  return x == revertNum || x === Math.floor(revertNum / 10)
};
// @lc code=end

