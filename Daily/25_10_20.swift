class Solution {
    func finalValueAfterOperations(_ operations: [String]) -> Int {
        var res = 0
        for op in operations {
            let secondCharIndex = op.index(op.startIndex, offsetBy: 1)
            let secondCharacter = op[secondCharIndex]
            if secondCharacter == "+" {
                res += 1
            } else {
                res -= 1
            }
        }
        return res
    }
}

let sol = Solution()

var operations = ["--X", "X++", "X++"]
print(sol.finalValueAfterOperations(operations))  //1
operations = ["++X", "++X", "X++"]
print(sol.finalValueAfterOperations(operations))  //3
operations = ["X++", "++X", "--X", "X--"]
print(sol.finalValueAfterOperations(operations))  //0
