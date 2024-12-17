const secondLargest = (arr)=>{
    const uniqueArray = Array.from(new Set(arr))
    if(uniqueArray.length <2) return null
    uniqueArray.sort((a,b)=>b-a)
    return uniqueArray[1]

}
console.log(secondLargest([1,2,3,4,5,6,7,8,9,10]))
console.log(secondLargest([5,8,6,3,2]))