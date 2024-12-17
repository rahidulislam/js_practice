const arr = [1,3,5,7,9]
console.log(arr.length)
console.log(arr.push(11))
console.log(arr)
console.log(arr.pop())
console.log(arr)
console.log(arr.unshift(22))
console.log(arr)
console.log(arr.shift())
console.log(arr)
console.log(arr[arr.length-1])

//Slicing
const arr2 = [1,2,3,4,5,6,7,8,9,10]
console.log(arr2.slice(0,3))

//Splicing
const arr3 = [1,2,3,4,5,6,7,8,9,10]
console.log(arr3.splice(1,3))
console.log(arr3)
console.log(arr3.splice(2,0,1,2,3))
console.log(arr3)
console.log(arr3.concat(11))
console.log(arr3)
console.log(arr3.join('-'))
console.log(arr3)
console.log(arr3.indexOf(9))
console.log(arr3.lastIndexOf(1))
console.log(arr3.includes(10))
const arr4 = new Array(10).fill('*')
console.log(arr4)
console.log(typeof arr4)
console.log(Array.isArray(arr4))
console.log(arr3.reverse())
console.log(arr3)