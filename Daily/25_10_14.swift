class Solution {
    func hasIncreasingSubarrays(_ nums: [Int], _ k: Int) -> Bool {
        guard k > 1 else { return true }

        var dp = Array(repeating: 1, count: nums.count)
        for i in 1..<nums.count {
            if nums[i] > nums[i - 1] { dp[i] = dp[i - 1] + 1 }
            if i - k >= 0 && dp[i] >= k && dp[i - k] >= k { return true }
        }
        return false
    }
}

let sol = Solution()
var (nums, k) = ([2, 5, 7, 8, 9, 2, 3, 4, 3, 1], 3)
print(sol.hasIncreasingSubarrays(nums, k))
(nums, k) = ([1, 2, 3, 4, 4, 4, 4, 5, 6, 7], 5)
print(sol.hasIncreasingSubarrays(nums, k))

/*
Given an array nums of n integers and an integer k, determine whether there exist two adjacent subarrays of length k such that both subarrays are strictly increasing. Specifically, check if there are two subarrays starting at indices a and b (a < b), where:

Both subarrays nums[a..a + k - 1] and nums[b..b + k - 1] are strictly increasing.
The subarrays must be adjacent, meaning b = a + k.
Return true if it is possible to find two such subarrays, and false otherwise.
*/
