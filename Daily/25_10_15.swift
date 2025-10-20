class Solution {
    func maxIncreasingSubarrays(_ nums: [Int]) -> Int {
        var lengthArray: [Int] = []
        var curCount = 1
        var maxLen: Int = 1

        for i in 1..<nums.count {
            if nums[i - 1] < nums[i] {
                curCount += 1
            } else {
                lengthArray.append(curCount)
                maxLen = max(maxLen, curCount / 2)
                curCount = 1
            }
        }

        maxLen = max(maxLen, curCount / 2)
        lengthArray.append(curCount)
        for i in 1..<lengthArray.count {
            maxLen = max(maxLen, min(lengthArray[i], lengthArray[i - 1]))
        }

        return maxLen
    }
}

let sol = Solution()

var nums = [2, 5, 7, 8, 9, 2, 3, 4, 3, 1]
print("3 === \(sol.maxIncreasingSubarrays(nums))")

nums = [1, 2, 3, 4, 4, 4, 4, 5, 6, 7]
print("2 === \(sol.maxIncreasingSubarrays(nums))")

nums = [-15, 19]
print("1 === \(sol.maxIncreasingSubarrays(nums))")

/*
Given an array nums of n integers, your task is to find the maximum value of k for which there exist two adjacent subarrays of length k each, such that both subarrays are strictly increasing. Specifically, check if there are two subarrays of length k starting at indices a and b (a < b), where:

Both subarrays nums[a..a + k - 1] and nums[b..b + k - 1] are strictly increasing.
The subarrays must be adjacent, meaning b = a + k.
Return the maximum possible value of k.

A subarray is a contiguous non-empty sequence of elements within an array.
*/
