// leetcode problem - 349. Intersection of Two Arrays
// time complexity - O(n)
// space complexity - O(n)

function intersection(nums1, nums2) {
    const nums1Set = Array.from(new Set(nums1));
    const nums2Set = new Set(nums2);
    const result = []
    for(let num of nums1Set){
        if(nums2Set.has(num)){
            result.push(num)
        }
    }
    return result

}

console.log(intersection([1,2,2,1],[2,2]))