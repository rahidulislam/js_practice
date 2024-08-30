function evenSquaredSum(inputArr) {
  // Find out even numbers using filter method 
  // square them using map method 
  // sum the squared numbers using reduce method
  const total = inputArr
    .filter((ele) => ele % 2 === 0)
    .map((ele) => ele * ele)
    .reduce((acc, ele) => acc + ele);
  // Return the total
  return total;
}

console.log(evenSquaredSum([1, 2, 3, 4, 5, 6]));
