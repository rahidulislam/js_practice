let sum = (a, b) => a + b;
console.log(sum(1, 2));

let double =n=>n*2;
console.log(double(2));

let sayHi=()=>console.log("Hello");
sayHi();

// let age = prompt("What is your age?", 18);
// let welcome = age<18?()=>alert("Hello"):()=>alert("Greetings!");
// welcome();

let sum1 =(a,b)=>{
    let result = a+b;
    return result;
}
console.log(sum1(1,2));

function ask(question,yes,no){
    if(confirm(question)) yes()
    else no()
}
ask("Do you agree?", ()=>alert("You agreed."), ()=>alert("You canceled the execution."));