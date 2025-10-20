class Solution {
    func findSmallestInteger(_ nums: [Int], _ value: Int) -> Int {
        var modArr = [Int](repeating: 0, count: value)
        var res = 0
        for num in nums {
            let tempMod = num % value
            if tempMod < 0 {
                modArr[tempMod + value] += 1
            } else {
                modArr[tempMod] += 1
            }
        }
        while true {
            for mod in 0..<modArr.count {
                if modArr[mod] == 0 { return res }
                modArr[mod] -= 1
                res += 1
            }
        }
    }
}

let sol = Solution()

var nums = [1, -10, 7, 13, 6, 8]
var value = 5
print("4 === \(sol.findSmallestInteger(nums, value))")
nums = [1, -10, 7, 13, 6, 8]
value = 7
print("2 === \(sol.findSmallestInteger(nums, value))")
nums = [0, -3]
value = 4
print("2 === \(sol.findSmallestInteger(nums, value))")
