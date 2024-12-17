function countVowel(str) {
    const vowel = 'aeiouAEIOU';
    let count = 0;
    for(let char of str){
        if(vowel.includes(char)){
            count++
        }

    }
    return count
}
console.log(countVowel('hello'))
console.log(countVowel('rahidul'))

// You are given a 0-indexed array of string words and two integers left and right.

// A string is called a vowel string if it starts with a vowel character and ends with a vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.

// Return the number of vowel strings words[i] where i belongs to the inclusive range [left, right].



function countVowelString(words,left,right) {
    const vowel = 'aeiou';
    let count = 0
    for(let i = left; i<=right; i++){
        console.log(words[i][0], words[i][words[i].length-1])
        if(vowel.includes(words[i][0]) && vowel.includes(words[i][words[i].length-1])){
            count++
        }
    }
    return count
    
}
console.log(countVowelString(["are","amy","u"], left = 0, right = 2))
console.log(countVowelString(["hey","aeo","mu","ooo","artro"], left = 1, right = 4))