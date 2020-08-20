/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
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
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }

function merge2Lists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1 || !list2) {
    return list1 ? list1 : list2
  }

  let p1: ListNode | null = list1
  let p2: ListNode | null = list2
  let tammyHead: ListNode | null = new ListNode()
  let tail = tammyHead

  while (p1 && p2) {
    if (p1.val < p2.val) {
      tail.next = p1
      p1 = p1.next
    } else {
      tail.next = p2
      p2 = p2.next
    }

    tail = tail.next
  }

  tail.next = p1 ? p1 : p2

  return tammyHead.next
}

function merge(lists: Array<ListNode | null>, left: number, right: number): ListNode | null {
  if (left === right) {
    return lists[left]
  }

  let mid = Math.floor((left + right) / 2)

  return merge2Lists(merge(lists, left, mid), merge(lists, mid + 1, right))
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists || lists.length === 0) {
    return null
  }

  return merge(lists, 0, lists.length - 1)
};


// @lc code=end

