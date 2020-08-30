/*
 * @lc app=leetcode.cn id=392 lang=typescript
 *
 * [392] 判断子序列
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
  if (s === null || s.length > t.length) {
    return false
  }

  if (s === "") {
    return true
  }

  let i = 0, j = 0

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++
    }

    j++
  }

  return i == s.length
};
// @lc code=end

