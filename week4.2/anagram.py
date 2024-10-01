def is_anagram(s, t):
    frequency_s = {}
    frequency_t = {}
    for i in s:
        if i in frequency_s:
            frequency_s[i] += 1
        else:
            frequency_s[i] = 1
    for i in t:
        if i in frequency_t:
            frequency_t[i] += 1
        else:
            frequency_t[i] = 1
    if frequency_s == frequency_t:
        return True
    else:
        return False
print(is_anagram("anagram", "nagaram"))