var lang ="JavaScript"

function learn(topic) {
    lang=topic
    console.log(`hello I love ${topic}`)
    if(true){
        let a =5;
        a=6;
        const b={c:8};
        b.c=9
        console.log(b)
    }
}
learn("JavaScript")

console.log(`hello ${lang}`)

// normal function
function hello (){
    console.log("hello")
}
console.log(hello())

// function expression
// unnamed function
const hello1= function (){
    console.log("hello1")
}
console.log(hello1())

const hello2 = function hello2(){
    console.log("hello2")
}
console.log(hello2())

// arrow function
const hello3 = () => {
    console.log("hello3")
}
console.log(hello3())

// anonymous function
function hello4(){
    return ()=>{
        console.log("hello4")
    }
}
console.log(hello4())
button = document.getElementById("btn")
function hello6(){
    console.log("hello6")
}
button.addEventListener("click", hello6)