def checkValidSelection(nums, curr, direction):
    length = len(nums)
    while curr >= 0 and curr < length:
        if nums[curr] > 0:
            nums[curr] -= 1
            direction *= -1
        curr += direction
    return 1 if sum(nums) == 0 else 0


def countValidSelections(nums) -> int:
    res = 0
    for i, num in enumerate(nums):
        if num == 0:
            res += checkValidSelection(nums[:], i, 1)
            res += checkValidSelection(nums[:], i, -1)
    return res


nums = [1, 0, 2, 0, 3]
print(countValidSelections(nums))  # 2

nums = [2, 3, 4, 0, 4, 1, 0]
print(countValidSelections(nums))  # 0
