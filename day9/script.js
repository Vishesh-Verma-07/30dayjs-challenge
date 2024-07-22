// DOM Manipulation
//Task/Activities
//Activity 1: Selecting and manipulating elements
//task 1 - select the element with id 'first' and change its text content
document.getElementById("first").textContent = "First Element";

//task 2 - select all elements with class 'second' and change their background color
let element = document.getElementsByClassName("second");
console.log(element[0]);
element[0].style.backgroundColor = "red";

//Activity 2: Creating and appending elements
console.log("------------------------------------------------------------------------------------------------------");
//task 3 - create a new div element with some text content and append it to the body
let newDiv = document.createElement("div");
newDiv.textContent = "New Div Element";
newDiv.style = "background-color: yellow; background-color: rgb(65, 255, 233); height: 100px; width: 350px; display: flex; align-items: center; justify-content: center; border : 2px solid grey; border-radius: 10px; margin: 20px;";
document.body.appendChild(newDiv);

//task 4 - create a new li element and append it to an existing list
let newLi = document.createElement("li");
newLi.textContent = "New List Item";
newLi.style = "background-color: rgb(65, 255, 132); height: 50px; width: 100px; display: flex; align-items: center; justify-content: center; border : 2px solid black; border-radius: 10px; ";
document.getElementsByClassName("list")[0].appendChild(newLi);


//Activity 3: Removing elements
console.log("------------------------------------------------------------------------------------------------------");
//task 5 - remove an element from the DOM

document.getElementsByClassName("remove")[0].remove();

//task 6 - remove the second last child of specific element
let parent = document.getElementsByClassName("list")[0]; // get the parent element
let child = parent.children[parent.children.length - 2]; // use the children property to get specific child element
let lastchild = parent.lastElementChild; // get the last child element
parent.removeChild(child);

//Activity 4: modifying attributes and classes
console.log("------------------------------------------------------------------------------------------------------");
//task 7 - change the alt attribute of an image
document.getElementsByTagName("img")[0].src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
document.getElementsByTagName("img")[0].alt = "this is google logo";

//task 8 - add a new and remove class to an element
document.getElementsByTagName("img")[0].classList.add("newClass");
document.getElementsByTagName("img")[0].classList.remove("newClass");

//Activity 5: Event Listeners
console.log("------------------------------------------------------------------------------------------------------");
//task 9 - add an event listener to an element
const button = document.getElementsByClassName("changepara")[0];
const paragraph = document.getElementsByClassName("para")[0];
button.addEventListener("click", ()=>{
    paragraph.textContent = "Button Clicked";
});


//task 10 - add a hover event listener to an element that changes its background color
let mouseOverElement = document.getElementsByClassName("mouseover")[0];
mouseOverElement.addEventListener("mouseover", ()=>{
    mouseOverElement.style.backgroundColor = "green";
});

//addtional self task add a event listner to change the background color of the element on hover
let mouseOverElement1 = document.getElementsByClassName("mouseover")[0];
mouseOverElement1.addEventListener("mouseover", ()=>{
    mouseOverElement1.style.backgroundColor = "green";
});
mouseOverElement1.addEventListener("mouseout", ()=>{
    mouseOverElement1.style.backgroundColor = "rgb(255, 122, 65)";
});