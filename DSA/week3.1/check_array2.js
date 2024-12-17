function checkArrayElement(arr1,arr2) {
    const arraySet = new Set(arr1)

    for(let ele of arr1){
        if (arraySet.has(ele)){
            return true}
    }
    return false
}
console.log(checkArrayElement([1,2,3,4,5], [1,3,5]))
console.log(checkArrayElement(['a','b','c'], ['z','y','a']))
console.log(checkArrayElement(['a','b','c'], [1,2,3]))