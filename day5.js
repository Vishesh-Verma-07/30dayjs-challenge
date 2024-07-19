//Fucntions
//Task/activity
//Activity 1: Function Declaration
//task 1 - function to check even or odd
function checkEvenOdd(num){
    if(num % 2 === 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}
console.log(checkEvenOdd(5));

//task 2 - function to calculate square of a number
function square(num){
    return num*num;
}
console.log(" square of 5 is" + square(5));

//Activity 2: Function Expression
console.log("------------------------------------------------------------------------------------------------------");
//task 3 - function to calculate maximum of two numbers
let max = function(a, b){
    if(a > b){
        return a;
    }
    return b;
}
console.log(" maximum of 15 and 10 is " + max(15, 10));

//task 4 - function to concatenate two strings
function concat(str1, str2){
    return str1 + str2;
}
console.log("Concatenation of 'Hello' and 'World' is " + concat("Hello", "World"));

//Activity 3: Arrow Function
console.log("------------------------------------------------------------------------------------------------------");
//task 5 - function to calculate sum of two numbers
let sum = (a, b) => a + b;
console.log("Sum of 5 and 10 is " + sum(5, 10));

//task 6 - function to check if a string contains a particular character
let containes = (str, char) => str.includes(char);
console.log(containes("Hello World", "o"));

//Activity 4: Function with Default Parameters
console.log("------------------------------------------------------------------------------------------------------");
//task 7 - function to return product of two numbers with default parameter
let product = (a, b = 1) => a * b;
console.log("Product of 5 and 10 is " + product(5, 10));

//task 8 - function to greet a user with default parameter
let greet = (name = "User", age = 18) => "Hello to " + name + " with age " + age;
console.log(greet("Sakshi", 22));

//Activity 5: Higher Order Function
console.log("------------------------------------------------------------------------------------------------------");
//task 9 - function to that take another function as parameter and print message number of times nubmer passed

function callback(){
    console.log("Hello");
}

function higherOrderFunction(callback, num){
    for(let i = 1; i <= num; i++){
        callback();
    }
}
higherOrderFunction(callback, 5);

//task 10 - higher order function to take 2 function and a value as input and use value for function one and then result of function one as input for function 2
function add(num){
    return num + 5;
}
function multiply(num){
    return num * 2;
}
function higherOrderFunction2(callback1, callback2, num){
    console.log(multiply(add(num)));
}
higherOrderFunction2(add, multiply, 5);