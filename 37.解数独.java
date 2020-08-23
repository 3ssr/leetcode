/*
 * @lc app=leetcode.cn id=37 lang=java
 *
 * [37] 解数独
 */

// @lc code=start
class Solution {
    public void solveSudoku(char[][] board) {
        if (board == null) {
            return;
        }

        backTrace(board, 0, 0);
    }

    public boolean backTrace(char[][]board, int row, int col) {
        // 本行走完, 走下一行
        if (col == 9) {
            return backTrace(board, row + 1, 0);
        }

        // 所有行都走完了
        if (row == board.length) {
            return true;
        }

        // 等于.需要向下执行循环去尝试数字
        if (board[row][col] != '.') {
            return backTrace(board, row, col + 1);
        }

        for (char c = '1'; c <= '9'; c++) {
            if (!canPlace(board, c, row, col)) {
                continue;
            }

            board[row][col] = c;
            
            if (backTrace(board, row, col + 1)) {
                return true;
            }

            // 撤销本次放置
            board[row][col] = '.';
        }

        return false;
    }

    /**
     * 判断c字符能否放在当前的单元格里
     * @param c
     * @param row
     * @param col
     * @return
     */
    public boolean canPlace(char[][] board, char c, int row, int col) {
        for (int i = 0; i < 9; i++) {
            if (board[row][i] == c) {
                return false;
            }

            if (board[i][col] == c) {
                return false;
            }

            // (行 / 3) * 3 + 列 / 3
            if (board[(row / 3) * 3 + i / 3][(col / 3) * 3 + i % 3] == c) {
                return false;
            }
        }

        return true;
    }

    public void printBoard(char[][] board) {
        for (int i = 0; i < board.length; i++) {
            System.out.println(board[i]);
        }
    }

    // public static void main(String[] args) {
    //     char[][] board = {
    //         {'5','3','.','.','7','.','.','.','.'},
    //         {'6','.','.','1','9','5','.','.','.'},
    //         {'.','9','8','.','.','.','.','6','.'},
    //         {'8','.','.','.','6','.','.','.','3'},
    //         {'4','.','.','8','.','3','.','.','1'},
    //         {'7','.','.','.','2','.','.','.','6'},
    //         {'.','6','.','.','.','.','2','8','.'},
    //         {'.','.','.','4','1','9','.','.','5'},
    //         {'.','.','.','.','8','.','.','7','9'}
    //     };

    //     Solution solution = new Solution();
    //     solution.solveSudoku(board);
    // }
}
// @lc code=end

