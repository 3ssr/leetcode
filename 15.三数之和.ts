/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  if (!nums || nums.length <= 2) {
    return []
  }

  nums.sort()
  // 记录一个数是否被使用了
  let markNums: {[num: string]: boolean} = {}
  let result: number[][] = []
  
  for (let i = 0; i < nums.length; i++) {
    // num是又谁算过的
    let cache: { [num: number]: boolean } = {}
    let targetNum = nums[i]

    if (targetNum > 0) {
      break
    }

    for (let j = i + 1; j < nums.length; j++) {
      let num = -targetNum - nums[j]

      if (cache[num]) {
        let item = [targetNum, num, nums[j]]
        let mark = item.join(".")

        if (markNums[mark]) {
          continue
        }

        result.push(item)
        markNums[mark] = true
      } else {
        cache[nums[j]] = true
      }
    }

    cache = {}
  }

  return result
};

// @lc code=end

