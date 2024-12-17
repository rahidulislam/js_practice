def missing_letter(letters):
    for letter in letters:
        if ord(letter)+1 != ord(letters[letters.index(letter)+1]):
            return chr(ord(letter)+1)

print(missing_letter(["a","b","c","e"]))
print(missing_letter(["m","o","p"]))