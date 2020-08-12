/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let p1 = 0, p2 = 0
  let merge: number[] = []

  while (p1 < nums1.length && p2 < nums2.length) {
    while (nums1[p1] !== undefined && nums1[p1] <= nums2[p2]) {
      merge.push(nums1[p1])
      p1++
    }

    while (nums2[p2] !== undefined && nums1[p1] > nums2[p2]) {
      merge.push(nums2[p2])
      p2++
    }
  }

  // 有一个数据未处理完
  if (p1 < nums1.length) {
    merge.push(...nums1.slice(p1, nums1.length))
  }

  if (p2 < nums2.length) {
    merge.push(...nums2.slice(p2, nums2.length))
  }

  if (merge.length % 2 === 0) {
    return (merge[merge.length / 2 - 1] + merge[merge.length / 2]) / 2
  }

  return merge[Math.floor(merge.length / 2)]
};
// @lc code=end
