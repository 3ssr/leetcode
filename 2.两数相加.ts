/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
//   }
// }

function getNumFromListNode(l: ListNode | null): number {
  let n = 0
  let i = 0

  while (l !== null) {
    n += (l.val + Math.pow(10, i))
    l = l.next
    i++
  }

  return n
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let dummyHead = new ListNode(0, null)
  let curr = dummyHead
  let carry = false

  while (l1 !== null || l2 !== null || carry) {
    let n1 = 0

    if (l1 !== null) {
      n1 = l1.val
      l1 = l1.next
    }

    let n2 = 0

    if (l2 !== null) {
      n2 = l2.val
      l2 = l2.next
    }

    let sum = n1 + n2 + (carry ? 1 : 0)

    if (sum >= 10) {
      sum = sum - 10
      carry = true
    } else {
      carry = false
    }

    curr.next = new ListNode(sum, null)
    curr = curr.next
  }

  return dummyHead.next
};
// @lc code=end

// let l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)))
// let l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)))
// console.log(addTwoNumbers(l1, l2))
