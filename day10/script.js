//Event Handling
//Task/Acitivites
//Activity 1: Event Listeners
//task 1 - add an event listener to a btton tah changes text content of a paragraph
let button = document.getElementsByClassName('btn')[0];
let paragraph = document.getElementsByClassName('para')[0];
button.addEventListener('click', function(){
    paragraph.textContent = 'I have been clicked';
});

//task 2 - add a double click event listner to an image that toggles its visibility 
let image = document.getElementsByClassName('image')[0];
image.addEventListener('click', function(){
    let iamgeVisiblity = image.style.visibility = 'visible';
    if(iamgeVisiblity == 'hidden'){
        image.style.visibility = 'visible';
        console.log('visible');
    }else{
        image.style.visibility = 'hidden';
        console.log('hidden');
    }
});


//Activity 2: mouse Events
//task 3 add a mouseover event listner to an element that changes its background color
let element = document.getElementsByClassName('backgroundchanger')[0];
element.addEventListener('mouseover', function(){
    element.style.backgroundColor = 'chartreuse';
});
//taks 4 add a mouseout event listner to an element that changes its background color
element.addEventListener('mouseout', function(){
    element.style.backgroundColor = 'blueviolet';
});

//Activity 3: Keyboard Events
//task 5 - add a keydown evnet listener to an input field that logs the console the key that was pressed
let input = document.getElementsByClassName('input')[0];
let answer = document.getElementsByClassName('answer')[0];
// console.log(input);
input.addEventListener('keydown', function(event){
    console.log(event.key);
    answer.textContent += event.key;
});

//task6 - add a keyup event listener to an input field that logs to the console the key that was released
let input2 = document.getElementsByClassName('input2')[0];
let answer2 = document.getElementsByClassName('answer2')[0];
input2.addEventListener('keyup', function(event){
    console.log(event.key);
    answer2.textContent = event.key;
});


//Activity 4: Form Events
//task 7 - add a submit event listener to a form that prevets the default submission and logs the form data to the console
let form = document.getElementsByClassName('form')[0];
// console.log(form.elements[0]);
form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Form Submitted');
    console.log("name: " + form.elements[0].value);
    console.log("mail: " + form.elements[1].value);
    console.log("password: " + form.elements[2].value);
    console.log("contact: " + form.elements[3].value);
});

//task 8 - add a change event listener to a select element that logs the selected value to the paragraph
let list = document.getElementById('list');
let para = document.getElementsByClassName("optionPara")[0];
console.log(list);
list.addEventListener('change', ()=>{
    para.textContent = list.options[list.selectedIndex].text;
});

//Activity 5: Event Delegation 
//task 9 - add a click event listener to a list that logs the text content of the item that was clicked
let ul = document.getElementsByClassName('ulList')[0];
console.log(ul)
ul.addEventListener('click', (event)=>{
    console.log(event.target.textContent);
});

//task 10 - add an event listener to a parent element that listens for events from dynamically added child elements
let contianer = document.getElementsByClassName('dynamicContainer')[0];
contianer.addEventListener('click', (event)=>{
    if(event.target && event.target.classList.contains('dynamicItem')){
        console.log(event.target.textContent);
    }
});

const btn = document.getElementsByClassName('addElement')[0];
btn.addEventListener('click', ()=>{
    let item = document.createElement('li');
    item.textContent = 'New Item';
    item.classList.add('dynamicItem');
    contianer.appendChild(item);
});



