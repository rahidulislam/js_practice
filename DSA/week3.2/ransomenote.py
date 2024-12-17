# leetcode problem - 383
# https://leetcode.com/problems/ransom-note/
import collections
def canConstruct(ransomNote, magazine):
    """
    :type ransomNote: str
    :type magazine: str
    :rtype: bool
    """
    # time complexity - O(n)
    # space complexity - O(n)
    # Approach - 1
    # ==============================================
    letterCount = {}
    for letter in magazine:
        if letter in letterCount:
            letterCount[letter] += 1
        else:
            letterCount[letter] = 1

    for letter in ransomNote:
        if letter not in letterCount or letterCount[letter] == 0:
            return False
        else:
            letterCount[letter] -= 1
    return True

    # Approach - 2
    # ==============================================
    # letterCount = collections.Counter(magazine)
    # for letter in ransomNote:
    #     if letter not in letterCount or letterCount[letter] == 0:
    #         return False
    #     else:
    #         letterCount[letter] -= 1
    # return True

print(canConstruct("aa", "aab"))
print(canConstruct("a", "b"))