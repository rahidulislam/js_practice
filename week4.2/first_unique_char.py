# leetcode problem - 387
class Solution(object):
    def firstUniqChar(self, s:str)->int:
        """
        :type s: str
        :rtype: int
        """
        hashmap = {}
        for char in s:
            if char in hashmap:
                hashmap[char] += 1
            else:
                hashmap[char] = 1
        for i in range(len(s)):
            if hashmap[s[i]] == 1:
                return i
        return -1

s= Solution()
print(s.firstUniqChar("leetcode"))