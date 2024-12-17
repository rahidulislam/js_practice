function countCharacter(inputStr) {
    // Convert the string to lowercase
    const lowerCase = inputStr.toLowerCase();

    // Create an object to store the count of each character
    const charCount = {};
    // Loop through the string
    for (let i = 0; i < lowerCase.length; i++) {
      // Remove spaces and special characters
      if (
        (lowerCase[i] >= "a" && lowerCase[i] <= "z") ||
        (lowerCase[i] >= "0" && lowerCase[i] <= "9")
      ) {
        // Trinary operator to check If the character is in the object, increment the count 
        charCount[lowerCase[i]] = (charCount[lowerCase[i]] || 0) + 1;
      }
    }
    // Return the object
    return charCount;
  }
  
  console.log(countCharacter("hello@world"));
  console.log(countCharacter("hello world"));
  console.log(countCharacter("hello123"));
  console.log(countCharacter("123"));
  console.log(countCharacter(""))

// Time complexity - O(n)
// Space complexity - O(n)