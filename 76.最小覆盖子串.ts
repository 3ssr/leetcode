/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
function minWindow(s: string, t: string): string {
  if (!s || !t || s.length < t.length) {
    return ""
  }

  let needChars: { [char: string]: number } = {}
  let window: { [char: string]: number } = {}

  // 记录最短子串的开始位置
  let minStart = 0
  let minLength = Number.POSITIVE_INFINITY

  for (const c of t) {
    needChars[c] = needChars[c] ? needChars[c] + 1 : 1
  }

  let left = 0, right = 0
  // 记录已经匹配到的字符个数
  let matchCount = 0
  let needSize = Object.keys(needChars).length

  while (right < s.length) {
    let c = s[right]
    window[c] = window[c] ? window[c] + 1 : 1

    if (window[c] === needChars[c]) {
      matchCount++
    }

    right++

    while (matchCount === needSize) {
      // 当找到一个窗口后，需要更新最小窗口的起止
      if (right - left < minLength) {
        minStart = left
        minLength = right - left
      }

      let deletedChar = s[left]
      // 减掉最左边的元素
      window[deletedChar]--

      if (window[deletedChar] < needChars[deletedChar]) {
        matchCount--
      }

      left++
    }
  }

  return minLength === Number.POSITIVE_INFINITY ? "" : s.substr(minStart, minLength)
};

// console.log(minWindow("ADOBECODEBANC", "ABC"))
// @lc code=end

