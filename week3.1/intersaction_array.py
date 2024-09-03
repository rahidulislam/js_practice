# leetcode problem 349
# https://leetcode.com/problems/intersection-of-two-arrays/
# time complexity - O(n)
# space complexity - O(n)

def intersaction_two_array(nums1, nums2):
    nums1Set = set(nums1)
    nums2Set = set(nums2)
    # approchh -1
    result = []
    for num in nums1Set:
        if num in nums2Set:
            result.append(num)
    return result
    # approach -2
    # return list(nums1Set & nums2Set)

print(intersaction_two_array([1,2,2,1], [2,2]))
