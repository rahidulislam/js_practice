# leetcode problem - 1832
# https://leetcode.com/problems/check-if-the-sentence-is-pangram/
# A pangram is a sentence where every letter of the English alphabet appears at least once.

# Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

# Example 1:

# Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
# Output: true
# Explanation: sentence contains at least one of every letter of the English alphabet.
# Example 2:

# Input: sentence = "leetcode"
# Output: false
class Solution(object):
    def checkingPagnam(self,sentence):
        # Approach -1
        unique_letter = set()
        for letter in sentence:
            unique_letter.add(letter)
        return len(unique_letter) == 26

        # Approach -2
        # unquie_letter = {}
        # for letter in sentence:
        #     unquie_letter[ord(letter)-97]=True
        # return len(unquie_letter) == 26
    
s = Solution()
print(s.checkingPagnam('thequickbrownfoxjumpsoverthelazydog'))
print(s.checkingPagnam('leetcode'))