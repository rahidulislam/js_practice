def sum_of_digit(num):
    sum = 0
    while num> 0:
        sum += num % 10
        num = num // 10
    return sum
# print(sum_of_digit(12345))

class Solution(object):
    def addDigits(self, num):
        """
        :type num: int
        :rtype: int
        """
        while num >=10:
            sum = 0
            while num >0:
                sum += num % 10
                num = num // 10
            num = sum
        return num

s = Solution()
print(s.addDigits(12345))