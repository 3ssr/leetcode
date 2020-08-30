/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
 * [567] 字符串的排列
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
  if (!s1 || !s2) {
    return false
  }

  // 零代表刚好，正数代表还需要出现几次，负数代表多出现了几次
  let map: { [char: string]: number } = {}

  for (const c of s1) {
    // 需要的字符初始值都是1
    map[c] = map[c] ? map[c] + 1 : 1
  }

  let left = 0, right = 0

  while (right < s2.length) {
    let c = s2[right]
    map[c] = map[c] ? map[c] - 1 : -1
    right++

    // 当出现一个不需要字符时，从left到right范围内的字符都无效了
    while (left < right && map[c] < 0) {
      map[s2[left]]++
      left++
    }

    if (right - left === s1.length) {
      return true
    }
  }

  return false
};



// console.log(checkInclusion("hello", "ooolleoooleh"))
// console.log(checkInclusion("ab", "eidbaooo"))
// console.log(checkInclusion("adc", "dcda"))
// @lc code=end

