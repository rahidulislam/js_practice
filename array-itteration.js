const numbers = [45, 4, 9, 16, 25];

function myFunction(total,value) {
    return total + value;
}

const numbers2 = numbers.reduce(myFunction,10)
console.log(numbers2)