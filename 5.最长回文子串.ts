/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  if (!s || s.length === 1) {
    return s
  }

  let maxLen = 0
  let longestPalindrome = ""

  for (let i = 0; i < s.length; i++) {
    // 奇数回文串
    let s1 = spread(s, i, i)
    // 偶数回文串
    let s2 = spread(s, i, i + 1)
    let curMaxLen = s1.length > s2.length ? s1.length : s2.length
    
    if (curMaxLen > maxLen) {
      maxLen = curMaxLen
      longestPalindrome = s1.length > s2.length ? s1 : s2
    }
    // console.log(longestPalindrome)
  }

  return longestPalindrome
};

/**
 * 从字符串的某两个位置向外扩散,找到回文子串
 * 当字符串长度为奇数时, i == j
 * @param s 
 * @param i 
 * @param j 
 * @returns 从i, j位置分别向左右扩散能得到的最长回文串
 */
function spread(s: string, i: number, j: number): string { 
  while (i >= 0 && j < s.length) {
    if (s[i] !== s[j]) {
      break
    }

    i--
    j++
  }

  return s.substring(i + 1, j)
}
// @lc code=end

// console.log(spread("babad", 2, 2))
// console.log(longestPalindrome("cbbd"))
