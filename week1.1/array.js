const arr = ['a', 'b', 'c'];
arr[1]='d'
console.log(arr)
arr.push('F')
console.log(arr)
arr.pop()
console.log(arr)
arr.unshift('G')
console.log(arr)
arr.shift()
console.log(arr)
console.log(arr[arr.length-1])

const obj = {
    a:1,
    b:2,
    c:3
}
data = 'a'
console.log(obj.a)
console.log(obj['a'])
console.log(obj[data])

// function
function greet(name) {
    console.log(`hello ${name}`);
}
greet('World')
greet('John')
greet('Sarah')

// function expression
const add = function (a, b) {
    return a+b
}
console.log(add(1, 2))

// arrow function
const add2 = (a, b) => a+b
console.log(add2(1, 2))

// function vs method
const person = {
    firstName: 'John',
    lastName: 'Doe',
    greet(age) {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}and I am ${age} years old.`);
    }
}
person.greet(30)

// conditionals
const age = 10
if (age>=18) {
    console.log('You can vote')
}else{
    console.log('You can not vote')
}

const age2 =18
const vote = age2>=18? 'You can vote':'You can not vote'
console.log(vote)

let day = 'Friday'
switch (day) {
    case 'Monday':
        console.log('Today is Monday');
        break
    case 'Tuesday':
        console.log('Today is Tuesday');
        break
    case 'Wednesday':
        console.log('Today is Wednesday');
        break
    default:
        console.log('Not a valid day');
        break
}