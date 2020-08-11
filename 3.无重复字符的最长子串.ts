/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let max = 0
  // 存放最长子串
  let map: any = {}
  let begin = 0, end = 0

  for (let index = 0; index < s.length; index++) {
    const c = s[index]

    if (map[c] !== undefined) {
      if (map[c] + 1 >= begin) {
        begin = map[c] + 1
      }
    }

    map[c] = index
    end = index
    let currMax = end - begin + 1
    max = currMax > max ? currMax : max
  }

  return max

  // for (let index = 0; index < s.length; index++) {
  //   const c = s[index]
    
  //   if (map[c]) {
  //     let cIdx = map[c]

  //     for (const key in map) {
  //       if (map[key] <= cIdx) {
  //         delete map[key]
  //       }
  //     }
  //   }

  //   map[c] = index
  //   let length = Object.keys(map).length
      
  //   if (length > max) {
  //     max = length
  //   }
  // }

  // return max
};
// @lc code=end
