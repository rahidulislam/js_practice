const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

//let size = fruits.length;

// toString Method
//document.getElementById("demo").innerHTML = fruits.toString();

//join Method
//document.getElementById("demo").innerHTML = fruits.join(" ");
//console.log(size)

let popFruits = fruits.pop();
document.getElementById("demo").innerHTML = fruits
console.log(popFruits)

// push add item at the end
fruits.push("Grapes")
document.getElementById("demo1").innerHTML = fruits

// shift add item in beginning and return shifted data
fruits.shift()
document.getElementById("demo2").innerHTML = fruits

// unshift add item in beginning and return new array length
let fruit3 = fruits.unshift("Lemon")
document.getElementById("demo3").innerHTML = fruits
console.log(fruit3)

// add item
fruits[fruits.length] = "kiwi"
document.getElementById("demo4").innerHTML = fruits

// splice method
fruits.splice(0,1, "Banana")
document.getElementById("demo5").innerHTML = fruits

// slice method
let sliceFruits = fruits.slice(2)
document.getElementById("demo6").innerHTML = sliceFruits