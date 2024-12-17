function evenSquaredSum(inputArr) {
    // Find out even numbers
    const evenArr = inputArr.filter(ele=>ele%2===0)
    // Square the even numbers and add them to the squared numbers
    const squaredArr = evenArr.map(ele=>ele*ele)
    // Sum the squared numbers
    let sum = squaredArr.reduce((acc,ele)=>acc+ele)
    // Return the sum
    return sum

}

console.log(evenSquaredSum([1,2,3,4,5,6]))