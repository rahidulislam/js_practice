// leetcod -344
function reverseString(str){
    const strArr = str.split('')
    const reversedArr = strArr.reverse()
    return reversedArr.join('')
}
console.log(reverseString("hello"))