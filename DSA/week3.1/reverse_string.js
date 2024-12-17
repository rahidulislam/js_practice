// leetcod -344
function reverseString(str){
    // const strArr = str.split('')
    // const reversedArr = strArr.reverse()
    // return reversedArr.join('')
    let left = 0
    let right = str.length-1
    while(left<right){
        let temp = str[left]
        str[left] = str[right]
        str[right] = temp
        left ++
        right --
    }
    return str
}
console.log(reverseString("hello"))
console.log(reverseString(["h","e","l","l","o"]))
console.log(reverseString(["H","a","n","n","a","h"]))