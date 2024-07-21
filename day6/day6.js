// Arrays
//Task/Activities
//Activity 1: Array creation and access
//task 1 - create an array of 5 elements and print it
let arr = [1, 2, 3, 4, 5];
console.log("Array: " + arr);

//task 2 - acess the first and last element of the array
console.log("First Element: " + arr[0]);
console.log("Last Element: " + arr[arr.length - 1]);

//Activity 2: Array Methods(basic)
console.log("------------------------------------------------------------------------------------------------------");
//task 3 - push
arr.push(6);
console.log("After push: " + arr);

//task 4 - pop
arr.pop();
console.log("After pop: " + arr);

//task 5 - shift
arr.shift();
console.log("After shift: " + arr);

//task 6 - unshift
arr.unshift(0);
console.log("After unshift: " + arr);

//Activity 3: Array Methods(intermediate)
console.log("------------------------------------------------------------------------------------------------------");
//task 7 - map - double the array elements
arr = [1, 2, 3, 4, 5];
let doubleArr = arr.map((Element) => {
    return Element * 2;
})
console.log("After map: " + doubleArr);

//task 8 - filter - filter the even elements
let evenArr = arr.filter((ele) => {
    return ele % 2 == 0;
})
console.log("After filter: " + evenArr);

//task 9 - reduce - sum of all elements
let sum = arr.reduce((accumulator, element) =>{
    return accumulator + element;
})
console.log("After reduce: " + sum);

//Activity 4: Array Methods(advanced)
console.log("------------------------------------------------------------------------------------------------------");
//task 10 - use for loop to print all elements
console.log("Using for loop to print all elements:");
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}


//task 11 - use forEach to print all elements
console.log("Using forEach to print all elements:");
arr.forEach((element) => {
    console.log(element);
})

//for and foreach me difference kuch ni hai bas foreach simppler syntax me hai

//Activity 5: Multidimensional Array
console.log("------------------------------------------------------------------------------------------------------");
//task 12 - create a 2D array and print it
let arr2D = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log("2D Array: " + arr2D);
arr2D.forEach((element) => {
    let str = "";
    element.forEach((element) => {
        str += element + " ";
    })
    console.log(str);
})

//task 13 - access the element of 2D array
console.log("Element at 2nd row and 3rd column: " + arr2D[1][2]); 