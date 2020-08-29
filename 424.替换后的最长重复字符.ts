/*
 * @lc app=leetcode.cn id=424 lang=typescript
 *
 * [424] 替换后的最长重复字符
 */

// @lc code=start
function characterReplacement(s: string, k: number): number {
  if (!s) {
    return 0
  }

  let maxLength = 0

  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    
    // 可替换字符的次数
    let replaceTime = k
    let left = i
    let right = i

    // 在可滑动，有替换次数，或者下一个字符同当前字符相同时可滑动
    while (right < s.length - 1 && (replaceTime > 0 || s[right + 1] === c)) {
      if (c !== s[right + 1]) {
        replaceTime--
      }

      right++
    }

    // 如果滑到最右端，发现还有替换次数, 向左走
    while (replaceTime > 0 && left > 0) {
      if (c !== s[left - 1]) {
        replaceTime--
      }

      left--
    }

    // console.log(s.substring(left, right + 1), replaceTime)
    maxLength = Math.max(maxLength, right - left + 1)
  }

  return maxLength
};

// console.log(characterReplacement("ABBB", 2))
// @lc code=end

