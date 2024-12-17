function calculator(num1, num2, operation) {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    if (isNaN(num1) || isNaN(num2)) {
        return "Invalid input"
    }
    switch (operation) {
        case "add":
           return num1 + num2
        case "subtract":
            return num1 - num2
        case "multiply":
            return num1 * num2
        case "divide":
            return num1 / num2
        default:
            return "Operation Not found"
    }
}
console.log(calculator(2,5,"add"))
console.log(calculator(2,5,"subtract"))
console.log(calculator(2,5,"multiply"))
console.log(calculator(2,5,"divide"))
console.log(calculator('a',5,"add"))