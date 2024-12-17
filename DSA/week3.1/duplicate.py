# 217 problem in leetcode
# time complexity O(n)
class Solution:
    def find_duplicate(self,nums):
        # Approach -1
        unique_nums = set()
        for num in nums:
            if num in unique_nums:
                return True
            else:
                unique_nums.add(num)
        return False
        # Approach -2
        # unique_nums = {}
        # for num in nums:
        #     if num in unique_nums:
        #         return True
        #     else:
        #         unique_nums[num] = 1
        # return False
s = Solution()
print(s.find_duplicate([1,2,3,4,2]))
print(s.find_duplicate([1,2,3,4]))