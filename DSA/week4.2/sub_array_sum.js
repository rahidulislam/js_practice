var subArraySum =function(nums,k){
    const obj = {0:1}
    let count = 0
    let sum =0
    for(let num of nums){
        sum += num
        const diff = sum - k
        if(obj[diff]){
            count += obj[diff]
        }
        if(obj[sum]){
            obj[sum] += 1
        }else{
            obj[sum] = 1}
    }
    return count
};
console.log(subArraySum([1,1,1],2))
console.log(subArraySum([1,2,3],3))