function countCharacter(inputStr){
    // Convert the string to lowercase
    const lowerCase = inputStr.toLowerCase()
    // Remove spaces and special characters
    const clearStr = lowerCase.replace(/[^a-z0-9]/g,'')
    // Create an object to store the count of each character
    const charCount = {}
    // Loop through the string
    for(let i=0; i<clearStr.length; i++){
        // If the character is in the object, increment the count
        if (clearStr[i] in charCount){
            charCount[clearStr[i]]+=1
        }else {
            
            // If the character is not in the object, add it to the object with a count of 1
            charCount[clearStr[i]]=1
        }
   
    
    }
    // Return the object
    return charCount
    
}

console.log(countCharacter('hello@world'))
console.log(countCharacter("hello world"));
console.log(countCharacter("hello123"));
console.log(countCharacter("123"));
console.log(countCharacter(""))
// Time complexity - O(n)
// Space complexity - O(n)