class Solution:
    def frequent_element(self,nums,k):
        hashmap = {}
        for num in nums:
            if num in hashmap:
                hashmap[num] +=1

            else:
                hashmap[num]=1
        sorted_hashmap = { key: value for key,value in sorted(hashmap.items(), key=lambda x: x[1], reverse=True)}
        return list(sorted_hashmap.keys())[0:k]
s = Solution()
print(s.frequent_element([1,1,1,2,2,3],2))