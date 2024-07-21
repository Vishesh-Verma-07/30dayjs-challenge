// Es6+ Features
//Task/Activities
//Activity 1: Template Literals
//task 1 - create a string using template literals to print your name and age
console.log("");
console.log("task 1");
let name = "John";
let age = 25;
console.log(`My name is ${name} and I am ${age} years old`);
// are ye apne backticks ka use karke string create kiya hai jisme aapne ${} ke andar variables ka use kiya hai ise template literals kehte hai

//task 2 - create a multiline string using template literals to print 
//your name, age, address and phone number
console.log("");
console.log("task 2");
let address = "123, abc street, xyz city";
let phoneNumber = "1234567890";
console.log(`My name is ${name} 
I am ${age} years old
I live at ${address}
My phone number is ${phoneNumber}`);

//Activity 2: Destructuring
console.log("------------------------------------------------------------------------------------------------------");
//task 3 - use array destructing to extract the first and last element of the array
console.log("");
console.log("task 3");
let arr = [1, 2, 3, 4, 5, 6, 7];
let [first, , , , , ,last] = arr;
console.log(first, last);

//task 4 - use object destructuring to extract the title and author from the book object
console.log("");
console.log("task 4");
let book = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 2000
};
let {title, author} = book;
console.log(title, author);


//Activity 3: Spread and Rest Operator
console.log("------------------------------------------------------------------------------------------------------");
//task 5 - use spread operator to merge a array and some new elements
console.log("");
console.log("task 5");
arr = [1, 2, 3];
let newArr = [...arr, 4, 5, 6];
console.log(newArr);

//task 6 - use rest operator in a fuction to accept any number of arguments and return their sum
console.log("");
console.log("task 6");
function sum(...args){
    let sum = 0;
    for(let arg in args){
        sum += args[arg];
    }
    return sum;
}
console.log(sum(1, 2, 3, 4, 5, 6));

//Activity 4: Default Parameters
console.log("------------------------------------------------------------------------------------------------------");
//task 7 - create a function that accepts two parameters and returns their product with second parameter defaulting to 1
console.log("");
console.log("task 7");
function product(a, b = 1){
    return a * b;
}
console.log(product(2, 3));
console.log(product(2));

//Activity 5: Enhanced Object Literals
console.log("------------------------------------------------------------------------------------------------------");
//task 8 - create an object using enhanced object literals with properties 
//name, age and a function that returns the name
console.log("");
console.log("task 8");
propName = "salary";       //dynamic property name
let person = {
    name,
    age,
    [propName]: 50000,
    getName(){
        return this.name;
    }
};
console.log(person.getName());
console.log(person.salary);

//task 9 - create an object with computed property name based on variable and function that returns the name
// ye jo task 9 me kiya hai ki dynamic property name ka use kiya hai, ye ES6 me aaya hua feature hai jisme hum object ke property ka name dynamic tarike se set kar sakate hai
console.log("");
console.log("task 9");
let key = "name";
let obj = {
    [key]: "John",
    getName(){
        return this.name;
    }
};