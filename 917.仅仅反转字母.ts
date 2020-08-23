/*
 * @lc app=leetcode.cn id=917 lang=typescript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
function reverseOnlyLetters(S: string): string {
  function isNotLetter(s: string) {
    let code = s.charCodeAt(0) 
    // 65-90 97-122
    
    return !((code >= 65 && code <= 90) || (code >= 97 && code <= 122))
  }

  if (!S) {
    return S
  }

  let chars = S.split("")
  let length = chars.length
  let left = 0
  let right = length - 1

  while (left < right) {
    while (left < right && isNotLetter(chars[left])) {
      left++
    }
    
    while (left < right && isNotLetter(chars[right])) {
      right--
    }
    
    if (left < right) {
      let temp = S[left]
      chars[left] = chars[right]
      chars[right] = temp
    }

    left++
    right--
  }

  return chars.join("")
};

// reverseOnlyLetters("a-bC-dEf-ghIj")
// @lc code=end

