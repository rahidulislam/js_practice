var topKFrequent = function(nums, k) {
    const obj = {}
    for(let num of nums){
        if(obj[num]){
            obj[num]+=1
        }else{
            obj[num]=1
        }
    }
    console.log(obj)
    const reslutKeySortedArr = Object.keys(obj).sort((a,b)=>obj[b]-obj[a])
    console.log(reslutKeySortedArr)
    return reslutKeySortedArr.slice(0,k)
};
console.log(topKFrequent([1,1,1,2,2,3],2))