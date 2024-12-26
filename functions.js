// let userName = "john";
// function showMessage() {
//   userName = "Bob";
//   let message = "Hello, I'm JavaScript! " + userName;
//   console.log(message);
// }
// console.log(userName);
// showMessage();
// showMessage();
// console.log(userName);

// function showMessage2(name,message="hi"){
//     console.log(name + " : " + message)
// }
// showMessage2("John","Hello")
// showMessage2("Bob","Hello")
// showMessage2("Bob")

// function showCount(count){
//     console.log(count ?? "Unknown")
// }
// showCount(0)
// showCount()
// showCount(10)
// showCount(null)
// showCount(undefined)

// function sum(a,b){
//     return a+b;
// }
// result =sum(5,9)
// console.log(result)

// function checkAge(age){
//     if(age>18){
//         return true
//     }else{
//         return confirm("Do you have permission from your parents?")
//     }
// }
// let age = prompt("How old are you?",18)
// if(checkAge(age)){
//     alert("Access granted")
// }else{
//     alert("Access denied")
// }

// function doNothing(){}
// alert(doNothing()===undefined)

// function showPrimes(n){
//     nextPrime: for(let i=2;i<n; i++){
//         for(let j=2; j<i;j++){
//             if(i%j == 0) continue nextPrime
//         }
//         alert(i)
//     }
   
// }
// showPrimes(10)

// function checkAge(age){
//     if (age>18){
//         return true
//     }else{
//         return confirm("Do you have permission from your parents?")}
// }
// alert(checkAge(15))
// function min(a,b){
//     if(a<b){
//         return a
//     }else{
//         return b
//     }
// }
// console.log(min(2,5))
// function sayHi(){
//     console.log("Hello")
// }
// let func = sayHi
// console.log(func())

function ask(question,yes,no){
    if(confirm(question)) yes()
    else no()
}

function showOk(){
    alert(("You agreed"))
}

function showCancel(){
    alert("You canceled")
}
ask("Do you agree?",showOk,showCancel)
