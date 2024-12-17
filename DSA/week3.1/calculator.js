function calculator(num1, num2, operation) {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    if (isNaN(num1) || isNaN(num2)) {
        return "Invalid input"
    }
    if(operation === "add"){
        return num1 + num2
    }
    else if(operation === "subtract"){
        return num1 - num2
    }
    else if(operation === "multiply"){
        return num1 * num2
    }
    else if(operation === "divide"){
        return num1 / num2
    }
}
console.log(calculator(2,5,"add"))
console.log(calculator(2,5,"subtract"))
console.log(calculator(2,5,"multiply")) 
console.log(calculator(2,5,"divide"))
console.log(calculator('a',5,"add"))