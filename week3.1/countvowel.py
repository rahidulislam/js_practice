def count_vowel(s):
    vowel = 'aeiouAEIOU'
    count = 0
    for i in s:
        if i in vowel:
            count += 1
    return count
print(count_vowel("hello"))

# You are given a 0-indexed array of string words and two integers left and right.

# A string is called a vowel string if it starts with a vowel character and ends with a vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.

# Return the number of vowel strings words[i] where i belongs to the inclusive range [left, right].

# time and space complexity O(n)
def count_vowel_string(words, left, right):
    vowel = 'aeiou'
    count = 0
    for i in range(left, right + 1):
        if words[i][0] in vowel and words[i][-1] in vowel:
            count += 1
    return count

print(count_vowel_string(["are","amy","u"], 0, 2))
print(count_vowel_string(["hey","aeo","mu","ooo","artro"], 1, 4))