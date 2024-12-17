function sumOfDigit(num){
    // approch -1
    // =============================
    // const numStr = num.toString()
    // let sum = 0
    // for(let ele of numStr){
    //     sum += Number(ele)
    // }
    // return sum
    // ===========================
    // approch -2
    // ===========================
    // let sum = 0
    // while(num>0){
    //     sum += num%10
    //     num = Math.floor(num/10)
    // }
    // return sum
    // ===========================
    // approch -3
    // ===========================
    
    while(num>=10){
        let sum = 0
        while(num>0){
            sum += num%10
            num = Math.floor(num/10)
        }
        num = sum
        
    }
    
    return num
}
console.log(sumOfDigit(38))