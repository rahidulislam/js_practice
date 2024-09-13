// 215. Kth Largest Element in an Array

// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

 

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

var findKthLargest = function(nums, k) {
    // let largest = -Infinity
    // let second_largest = -Infinity
    // if(nums.length <2) return null
    // for(let num of nums){
    //     if(num>>largest){
    //         second_largest = largest
    //         largest = num
    //     }else if(num<largest && num > second_largest){
    //         second_largest = num
    //     }
    // }
    // second_largest === -Infinity ? null : second_largest
    // return second_largest

    return nums.sort((a,b)=>b-a)[k-1]
};


console.log(findKthLargest([3,2,1,5,6,4], 2))
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4))