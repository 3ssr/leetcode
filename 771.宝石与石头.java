import java.util.HashMap;
import java.util.Map;

/*
 * @lc app=leetcode.cn id=771 lang=java
 *
 * [771] 宝石与石头
 */

// @lc code=start
class Solution {
    public int numJewelsInStones(String J, String S) {
        if (J == null) {
            return 0;
        }

        Map<Character, Boolean> map = new HashMap<>();
        
        for (char c : J.toCharArray()) {
            map.put(c, true);
        }

        int count = 0;
        for (char c : S.toCharArray()) {
            if (map.get(c) != null) {
                count++;
            }
        }

        return count;
    }
}
// @lc code=end

