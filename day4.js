// LOOPS
//Task/Activities
//Activity 1: For Loop
//task 1 - Print 1 to 10
console.log("Print 1 to 10")
for(let i = 1; i <= 10; i++){
    console.log(i);
}

//task 2 - Multiplication Table
console.log("Multiplication Table of 5");
let a = 5;
for(let i = 1; i <= 10; i++){
    console.log(a + " * " + i + " = " + a*i);
}

//Activity 2: While Loop
console.log("------------------------------------------------------------------------------------------------------");
//task 3 - sum of first 10 natural numbers
console.log("Sum of first 10 natural numbers");
let sum = 0, i = 1;
while(i <= 10){
    sum += i;
    i++;
    console.log(sum);
}
//task 4 - print 10 to 1
console.log("Print 10 to 1");
let j = 10;
while(j > 0){
    console.log(j);
    j--;
}

//Activity 3: Do While Loop
console.log("------------------------------------------------------------------------------------------------------");
//task 5 - print 1 to 10
console.log("Print 1 to 10 in do while");
let k = 1; 
do{
    console.log(k);
    k++;
}
while(k <= 10);
// yaha pe while me condition ni dete bas while lagate hai ki do until while reaches the condition
//task 6 - factorial of a number
let num = 7;
let fact = 1;
do{
    fact *= num;
    num--;
}
while(num > 0);
console.log("Factorial of 7 is: " + fact);

//Activity 4: Nested Loop
console.log("------------------------------------------------------------------------------------------------------");
//task 7 - print pattern
let str = "";
for(let i = 1; i <= 5; i++){
    str += " * ";
    console.log(str);
}

//Activity 5: Break and Continue
console.log("------------------------------------------------------------------------------------------------------");
//task 8 - continue
console.log("Continue at 5");
for(let i = 1; i <= 10; i++){
    if(i == 5){
        continue;
    }
    console.log(i);
}

//task 9 - break
console.log("Break at 7");
for(let i = 1; i <= 10; i++){
    if(i == 7){
        break;
    }
    console.log(i);
}