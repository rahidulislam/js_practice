class Solution:
    def kthLargest(self, arr, k):
        # approch - 1
        # return sorted(arr)[-k]
        # approch - 2
        arr.sort(reverse=True)
        return arr[k-1]
    
s = Solution()
print(s.kthLargest([3,2,1,5,6,4], 2))
print(s.kthLargest([3,2,3,1,2,4,5,5,6], 4))