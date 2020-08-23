/*
 * @lc app=leetcode.cn id=51 lang=typescript
 *
 * [51] N皇后
 */


// @lc code=start
function solveNQueens(n: number): string[][] {
  if (n == 0 || n == 2 || n == 3) {
    return []
  }

  if (n == 1) {
    return [[`Q`]]
  }


  let result: string[][] = []
  let board = getInitBoard(n)
  backTrace(result, board, 0)

  return result
};

function getInitBoard(n: number) {
  let board: string[][] = []

  for (let i = 0; i < n; i++) {
    let row: string[] = []

    for (let j = 0; j < n; j++) {
      row.push('.')
    }
    
    board.push(row)
  }

  return board
}

function formatBoard(board: string[][]) {
  let result: string[] = []

  for (const row of board) {
    result.push(row.join(""))
  }

  return result
}

function isQ(s: string) {
  return s === 'Q'
}

function canPlace(board: string[][], row: number, col: number): boolean {
  let length = board.length

  // 向上
  for (let i = row -1 ; i >= 0; i--) {
    if (isQ(board[i][col])) {
      return false
    }
  }

  // 左上
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (isQ(board[i][j])) {
      return false
    }
  }

  // 右上
  for (let i = row - 1, j = col + 1; i >= 0 && j < length; i--, j++) {
    if (isQ(board[i][j])) {
      return false
    }
  }

  return true
}

function backTrace(result: string[][], board: string[][], row: number) {
  let length = board.length
  
  // 行走完了就结束了，走到最后完成了
  if (row === length) {
    result.push(formatBoard(board))
    return
  }

  for (let col = 0; col < length; col++) {
    if (!canPlace(board, row, col)) {
      continue
    }
    
    board[row][col] = 'Q'
    // 如果可以放，放上Q后，继续下一行
    backTrace(result, board, row + 1)
    // 回溯
    board[row][col] = '.'
  }
}

// solveNQueens(5)
// @lc code=end

