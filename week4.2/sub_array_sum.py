class Solution:
    def subarraySum(self,nums:list,k:int)->int:
        # dictionary to store prefix sum count
        prefix_sum_count = {0:1}
        current_sum = 0
        count = 0 

        # loop through the array
        for num in nums:
            current_sum += num
            # check if current_sum - k is in the dictionary
            if current_sum -k in prefix_sum_count:
                count += prefix_sum_count[current_sum-k]
            # update the frequency of current prefix sum in the dictionary
            if current_sum in prefix_sum_count:
                prefix_sum_count[current_sum] += 1
            else:
                prefix_sum_count[current_sum] = 1
        return count 


s = Solution()
print(s.subarraySum(nums = [1,1,1], k = 2))