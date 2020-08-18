/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (!strs || strs.length === 0) {
    return ""
  }

  if (strs.length === 1) {
    return strs[0]
  }

  let longestPrefix = getLongestPrefix(strs[0], strs[1])
  console.log(longestPrefix)

  for (let i = 2; i < strs.length; i++) {
    let prefix = getLongestPrefix(longestPrefix, strs[i])

    if (prefix.length < longestPrefix.length) {
      longestPrefix = prefix
    }

  }

  return longestPrefix

};

function getLongestPrefix(str1: string, str2: string) {
  if (!str1 || !str2) {
    return ""
  }

  let begin = 0
  let end = Math.min(str1.length, str2.length) - 1
  let prefix = ""

  while (begin < end) {
    let mid = Math.floor((begin + end) / 2)
    let prefix1 = str1.substring(begin, mid + 1)
    let prefix2 = str2.substring(begin, mid + 1)

    if (prefix1 === prefix2) {
      prefix += prefix1
      begin = mid + 1
    } else {
      end = mid
    }
  }

  if (begin === end) {
    if (str1[begin] === str2[begin]) {
      prefix += str1[begin]
    }
  }

  return prefix
}

console.log(longestCommonPrefix(["c","c"]))
// @lc code=end

