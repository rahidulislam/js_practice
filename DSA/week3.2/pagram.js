// leetcode 1832

// https://leetcode.com/problems/check-if-the-sentence-is-pangram/
// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:

// Input: sentence = "leetcode"
// Output: false

var checkingPagnam=function(sentence){
    // Approach -1
    // const uniqueLetter = new Set();
    // for(let letter of sentence){
    //     uniqueLetter.add(letter)
    // }
    // return uniqueLetter.size===26

    // Approach -2
    const uniqueLetter = new Array(26).fill(false)
    for(let letter of sentence){
        uniqueLetter[letter.charCodeAt(0)-97]=true
    }
    return uniqueLetter.every(Boolean)
}
console.log(checkingPagnam('thequickbrownfoxjumpsoverthelazydog'))
console.log(checkingPagnam('leetcode'))