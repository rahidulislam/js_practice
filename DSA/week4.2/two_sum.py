class Solution(object):
    def twoSum(self, nums:list[int], target:int)->list[int]:
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        hashmap = {}
        for i in range(len(nums)):
            complement = target - nums[i]
            if complement in hashmap:
                return [hashmap[complement], i]
            hashmap[nums[i]] = i

s=Solution()
print(s.twoSum([2,7,11,15],9))