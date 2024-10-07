# leetcode problem 344
# https://leetcode.com/problems/reverse-string/
# def reverse_string(s):
#     return s[::-1]
# print(reverse_string("hello"))

# def reverse_list(s):
#     return s.reverse()
# print(reverse_list(["h","e","l","l","o"]))
# print(reverse_list([1,2,3,4,5]))
# ============================================

# def reverse_list(s):
#     left =0
#     right = len(s)-1
#     while left < right:
#         s[left], s[right] = s[right], s[left]
#         left += 1
#         right -= 1
#     return s
# print(reverse_list(["h","e","l","l","o"]))
# print(reverse_list([1,2,3,4,5]))

# =============================================
def reverse_list(s:list[str])-> list[str]:
    left =0
    right = len(s)-1
    while left < right:
        temp = s[left]
        s[left] = s[right]
        s[right] = temp
        # s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1
    return s
print(reverse_list(["h","e","l","l","o"]))
print(reverse_list([1,2,3,4,5]))