// leetcode problem - 387
var firstUniqChar = function(s) {
    const obj = {}
    for(let char in s){

        if(obj[s[char]]){
            obj[s[char]]+=1
        }else{
            obj[s[char]]=1
        }
    }
    for(let i=0;i<s.length;i++){
        if(obj[s[i]]===1){
            return i
        }
    }
    return -1
};
console.log(firstUniqChar("leetcode"))