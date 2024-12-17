var capitalizeTitle = function (title) {
  // convert string to array with lower case
  const words = title.toLowerCase().split(" ");
  // define an array to track each word to capitalize
  const result = [];
  // convert each word to capitalize using for loop
  for (let word of words) {
    if (word.length > 2) {
      result.push(word[0].toUpperCase() + word.slice(1));
    } else {
      result.push(word);
    }
  }
  return result.join(" ");
};
console.log(capitalizeTitle("capiTalIze tHe titLe"));
console.log(capitalizeTitle("First leTTER of EACH Word"));
console.log(capitalizeTitle("i lOve leetcode"));
// time complexity - O(n)
// space complexity - O(n)