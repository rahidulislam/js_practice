function evenSquaredSum(inputArr) {
    // Define an array to store even numbers
    const evenArr = []
    // Define a variable to store squared Numbers
    const squaredArr = []

    // Define a variable to store the sum
    let sum = 0
    // Find out even numbers
    for(let ele of inputArr){
        if (ele%2===0){
            evenArr.push(ele)
        }
    }
    // Square the even numbers and add them to the squared numbers
    for(let ele of evenArr){
        squaredArr.push(ele*ele)
    }
    // Sum the squared numbers
    for(let i of squaredArr){
        sum+=i
    }

    // Return the sum
    return sum

}

console.log(evenSquaredSum([1,2,3,4,5,6]))