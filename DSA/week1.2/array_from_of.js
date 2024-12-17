function printNums () {
    console.log(arguments)
    console.log(Array.from(arguments))
}
printNums(1,2,3,4,5)
console.log(Array.of(1,2,1,3))