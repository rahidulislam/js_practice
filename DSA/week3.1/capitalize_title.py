class Solution(object):
    def capitalizeTitle(self, title:str)->str:
        """
        :type title: str
        :rtype: str
        """
        # approch -1
        # ==============================================
        # words = title.lower().split(" ")
        # result = []
        # convert each word to capitalize
        # for word in words:
        #     if len(word)>2:
        #         result.append(word[0].upper()+word[1:])
        #     else:
        #         result.append(word)
        # return " ".join(result)
        # ==============================================
        # approch - 2
        # ==============================================
        words = title.lower().split(" ")
        result = [word[0].upper()+word[1:] if len(word)>2 else word for word in words  ]
        return " ".join(result)
        

s = Solution()
print(s.capitalizeTitle("capiTalIze tHe titLe"))
print(s.capitalizeTitle("First leTTER of EACH Word"))
print(s.capitalizeTitle("i lOve leetcode"))