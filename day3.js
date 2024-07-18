// CONTROL STRUCTURES

// Task/Activities
// Activity 1: If-Else Statement
//task 1
let a = 10;
if(a > 0){
    console.log("Positive");
}
else if(a < 0){
    console.log("Negative");
}
else{
    console.log("Zero");
}

//task 2
let b = 21;
if(b >= 18){
    console.log("Eligible to vote");
}
else{
    console.log("Not eligible to vote");
}


// Activity 2: Nested If-Else Statement
console.log("------------------------------------------------------------------------------------------------------");
//task 3
let c = 10, d = 20, e = 30;
if(c > d){
    if(c > e){
        console.log("C is greatest");
    }
    else{
        console.log("E is greatest");
    }
}
else{
    if(d > e){
        console.log("D is greatest");
    }
    else{
        console.log("E is greatest");
    }
}

//Activity 3: Switch Statement
console.log("------------------------------------------------------------------------------------------------------");
//task 4
let f = 2;
switch(f){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Input");
        break;
}

//Task 5
let g = 91;
switch(true){
    case g >= 90:
        console.log("Grade A");
        break;
    case g >= 80:
        console.log("Grade B");
        break;
    case g >= 70:
        console.log("Grade C");
        break;
    case g >= 60:
        console.log("Grade D");
        break;
    case g >= 50:
        console.log("Grade E");
        break;
    default:
        console.log("Fail");
        break;
}

//Activity 4: Teranry Operator
console.log("------------------------------------------------------------------------------------------------------");
//task 6
let h = 10;
let result = (h % 2 == 0) ? "Even" : "Odd";
console.log(result);

//Activity 5: Combining conditions
console.log("------------------------------------------------------------------------------------------------------");
//task 7- check leap year
let i = 2024;

//condition is leap year if it is divisible by 4 but not by 100 unless it is divisible by 400
let leap = ((i % 4 == 0) && (i % 100 != 0))  ? "Leap Year" : ((i % 400 == 0)) ? "Leap Year" : "Not a Leap Year";
console.log(leap);
