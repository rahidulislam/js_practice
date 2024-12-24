
// let i=0
// while(i<3){
//     console.log(i)
//     i++
// }

let i =0
// while(i){
//     console.log(i)
//     i--
// }
// while (i) console.log(i--)

do{
    console.log(i)
    i++
}while(i<3)

let sum = 0
while(true){
    let value =+ prompt("Enter a number",'')
    if(!value) break;
    sum += value
}
console.log('Sum: '+sum)