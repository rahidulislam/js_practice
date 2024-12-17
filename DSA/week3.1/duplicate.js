function findDuplicate(nums) {
    // approach -1
    // =======================
    // const set = new Set()
    // for(let num of nums){
    //     if(set.has(num)){
    //         return true
    //     } else{
    //         set.add(num)
    //     }
    // }
    // return false
    // ==========================
    //approach -2
    // ==========================
    const map = new Map()
    for(let num of nums){
        if(map.has(num)){
            return true
        } else{
            map.set(num,1)
        }
    }
    return false
}

console.log(findDuplicate([1,2,3,4,5,6,7,8,9,10,1]))
console.log(findDuplicate([1,2,3,4,5,6,7,8,9,10]))