function missingLetter(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].charCodeAt(0))
        if(arr[i].charCodeAt(0)+1 !== arr[i+1].charCodeAt(0)){
            return String.fromCharCode(arr[i].charCodeAt(0)+1)
        }
    }
}

console.log(missingLetter(['a', 'b', 'c', 'f']))
console.log(missingLetter(['m', 'o']))