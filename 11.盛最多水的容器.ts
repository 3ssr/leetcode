/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  if (!height || height.length < 2) {
    return 0
  }
  
  let left = 0
  let right = height.length - 1
  let maxArea = 0

  while (left < right) {
    let minHeight = Math.min(height[left], height[right])
    let area = minHeight * (right - left)

    if (area > maxArea) {
      maxArea = area
    }

    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return maxArea
};
// @lc code=end

