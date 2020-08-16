/*
 * @lc app=leetcode.cn id=6 lang=typescript
 *
 * [6] Z 字形变换
 */

// @lc code=start
function convert(s: string, numRows: number): string {
  if (!s || s.length <= numRows) {
    return s
  }

  let map: string[] = []
  let row = 0
  let goingDown = false
  
  for (let c of s) {
    if (!map[row]) {
      map[row] = ""
    }

    map[row] += c

    // 需要反转
    if (row === 0 || row === numRows - 1) {
      goingDown = !goingDown
    }

    row = goingDown ? row + 1 : row - 1
  }
  
  return map.join("")
};
// @lc code=end
