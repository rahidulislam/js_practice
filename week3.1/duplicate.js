function findDuplicate(nums) {
    const set = new Set()
    for(let num of nums){
        if(set.has(num)){
            return true
        } else{
            set.add(num)
        }
    }
    return false
}

console.log(findDuplicate([1,2,3,4,5,6,7,8,9,10,1]))
console.log(findDuplicate([1,2,3,4,5,6,7,8,9,10]))