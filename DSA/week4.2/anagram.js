var isAnagram = function(s, t) {
    const frequency1 = {}
    const frequency2 = {}
    for(let ele of s){
        if(frequency1[ele]){
            frequency1[ele]+=1
        }else{
            frequency1[ele]=1
        }
    }
    for(let ele of t){
        if(frequency2[ele]){
            frequency2[ele]+=1
        }else{
            frequency2[ele]=1
        }
    }
    for(let key in frequency1){
        if(frequency1[key]!==frequency2[key]){
            return false
        }
    }
    return true
   
};

console.log(isAnagram('aacc','ccac'))
console.log(isAnagram("anagram", "nagaram"))