typeof undefined;
typeof null;
typeof "Hello, World!";
typeof 1;
typeof 1.1;
typeof true;
typeof false;
typeof [1, 2, 3];
typeof { name: "John", age: 30 };
typeof new Date();
typeof function () {};
typeof /abc/;
typeof NaN;
typeof Infinity;
typeof Symbol();
typeof 123n;

let result = prompt("Enter a number", 10);
alert(`your number is ${result}`);
confirm(`Is ${result} is your number?`);

// let isBoss = confirm("Are you the boss?")
// alert(isBoss)
