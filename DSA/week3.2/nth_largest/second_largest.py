class Solution:
    def second_largest(self,arr):
        unique_list = list(set(arr))
        unique_list.sort()
        return unique_list[-2]
    
s = Solution()
print(s.second_largest([1,2,3,4,5]))