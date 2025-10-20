class Solution {
    func myAtoi(_ s: String) -> Int {
        for i in 0..<s.count {
        }
        return 0
    }
}

let sol = Solution()

var s = "42"
print("42 === \(sol.myAtoi(s))")

s = " -042"
print("-42 === \(sol.myAtoi(s))")

s = "1337c0d3"
print("1337 === \(sol.myAtoi(s))")

s = "0-1"
print("0 === \(sol.myAtoi(s))")

s = "words and 987"
print("0 === \(sol.myAtoi(s))")
