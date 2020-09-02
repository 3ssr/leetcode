/*
 * @lc app=leetcode.cn id=997 lang=typescript
 *
 * [997] 找到小镇的法官
 */

// @lc code=start
function findJudge(N: number, trust: number[][]): number {
  if (N === 1) {
    return 1
  }

  let map: any = {}

  for (const item of trust) {
    let p1 = item[0]
    let p2 = item[1]
    map[p1] = map[p1] ? map[p1] - 1 : -1
    map[p2] = map[p2] ? map[p2] + 1 : 1
  }

  for (let person in map) {
    if (map[person] === N - 1) {
      return parseInt(person)
    }
  }

  return -1
};
// @lc code=end

console.log(findJudge(2, [[1,2]]))
console.log(findJudge(3, [[1,3],[2,3]]))
console.log(findJudge(3, [[1,3],[2,3],[3,1]]))
console.log(findJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]]))
