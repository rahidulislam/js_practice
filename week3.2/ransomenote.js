// leetcode problem - 383. Ransom Note
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

function canConstruct(ransomNote, magazine) {
    const letterCount = new Map()
    for(let letter of magazine){
        if(letterCount.has(letter)){
            letterCount.set(letter, letterCount.get(letter)+1)
        }else{
            letterCount.set(letter, 1)
        }
    }

    for(let letter of ransomNote){
        if(!letterCount.has(letter)||letterCount.get(letter)===0) return false
        letterCount.set(letter, letterCount.get(letter)-1)
    }
    return true
}
console.log(canConstruct("aa","aab"))
console.log(canConstruct("a","b"))
// time complexity - O(n)
// space complexity - O(n)
