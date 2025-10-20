import Foundation

func BS(_ potions: [Int], _ target: Double) -> Int {
    if potions[potions.count - 1] < Int(target) { return 0 }
    var first = 0.0
    var last = Double(potions.count - 1)
    while first < last {
        let mid = first + floor((last - first) / 2)
        if potions[Int(mid)] < Int(target) {
            first = mid + 1
        } else {
            last = Double(mid)
        }
    }
    return potions.count - Int(last)
}

class Solution {
    func successfulPairs(_ spells: [Int], _ potions: [Int], _ success: Int) -> [Int] {
        var newPotions = potions
        var res: [Int] = []
        newPotions.sort()
        for spell in spells {
            let target = ceil(Double(success) / Double(spell))
            res.append(BS(newPotions, target))
        }
        return res
    }
}

let sol = Solution()

let spellsArray = [[5, 1, 3], [3, 1, 2]]
let potionsArray = [[1, 2, 3, 4, 5], [8, 5, 8]]
let success = [7, 16]

for i in 0..<spellsArray.count {
    print(sol.successfulPairs(spellsArray[i], potionsArray[i], success[i]))
}
