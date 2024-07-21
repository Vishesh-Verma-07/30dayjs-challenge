// Objects
//Task/Activities
//Activity 1: Object creation and access
//task 1 - create an object represting a book with properties title, author, year and print it
console.log("");
console.log("task 1");
let book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988
}
console.log("Book: " + book);

//task 2 - print the title and author of the book
console.log("");
console.log("task 2");
console.log("Title: " + book.title);
console.log("Author: " + book.author);


//Activity 2: Object Methods
console.log("------------------------------------------------------------------------------------------------------");
//task 3 - add a method to the book object to print a string that has book title, author and year
console.log("");
console.log("task 3");
book.print = function(){
    return book.title + " by " + book.author + " published in " + book.year;
}
console.log(book.print());

//task 4 - add a method to the book object to update the year of the book
console.log("");
console.log("task 4");
book.updateYear = function(newYear){
    book.year = newYear;
}
book.updateYear(1990);
console.log(book.print());

//Activity 3: Nested Objects
console.log("------------------------------------------------------------------------------------------------------");
//task 5 - create a nested object representing a library with properties name, location and books
console.log("");
console.log("task 5");
let library = {
    name: "City Library",
    location: "Indore",
    books: [
        {
            title: "The Alchemist",
            author: "Paulo Coelho",
            year: 1988
        },
        {
            title: "The Da Vinci Code",
            author: "Dan Brown",
            year: 2003
        },
        {
            title: "The Kite Runner",
            author: "Khaled",
            year: 2003
        }
    ]
}
console.log("Library: " + JSON.stringify(library, null, 2));
//json.stringify is used to print the object in a readable format and has 3 parameters
//1st is the object to be printed
//2nd is the replacer which is null here (optional). it can be array or function
//3rd is the space which is 2 here (optional). it can be a string or number

//task 6 - print the name of the library and titles of all the books in the library
console.log("");
console.log("task 6");
console.log("Library Name: " + library.name);
console.log("Books: ");
library.books.forEach((book) => {
    console.log(book.title);
})

//Activity 4: the this keyword
console.log("------------------------------------------------------------------------------------------------------");
//task 7 - add a method to the book object that uses the this keyword to print the book details
console.log("");
console.log("task 7");
book.printDetails = function(){
    return this.title + " by " + this.author + " published in " + this.year;
}
console.log("using this keyword: " + book.printDetails());

//Activity 5: Object Iteration
console.log("------------------------------------------------------------------------------------------------------");
console.log("");
console.log("task 8");
//task 8 - print all the properties of the book object using for in loop
console.log("Properties of book object: ");
for(let properties in book){
    console.log(properties);
}

//task 9 - print all the properties of the book object using Object.keys and object.values
console.log("");
console.log("task 9 ");
console.log("Properties of book object using Object.keys: ");
console.log(Object.keys(book));
console.log("Properties of book object using Object.values: ");
console.log(Object.values(book));