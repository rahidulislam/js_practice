var rotate = function(nums, k) {
    let size = nums.length
    // k = size % k
    console.log(k)
    nums.reverse()
    console.log(nums)
    const splitKPartandReverse = nums.slice(0,k).reverse()
    const splitRemainPartandReverse = nums.slice(k).reverse()
    return splitKPartandReverse.concat(splitRemainPartandReverse)
};

console.log(rotate([1,2,3,4,5,6,7], 3))
console.log(rotate([-1,-100,3,99], 2))