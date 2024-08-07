// Promises and Asyn/Await
// Task/Activities

//Activity 1: understandin promises
//Task 1; create a promise that resolves with a message after a 2 second timeout and log the message to the console
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise is resolved');
    }, 2000);
});
promise.then((message) => {
    console.log(message);
});


//Task 2: create a promise that rejects with a message after a 2 second timeout and handle the error message using catch
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise is rejected');
    }, 2000);
});
promise2.catch((message) => {
    console.log(message);
})


//Activity 2: chaining promises
// Task 3: create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('First promise resolved');
    }, 2000);
}
);
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Second promise resolved');
    }, 2000);
}
);
const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Third promise resolved');
    }, 2000);
}
);
promise3.then((message) => {
    console.log(message);
    return promise4;
}).then((message) => {
    console.log(message);
    return promise5;
}).then((message) => {
    console.log(message);
});

// Activity 3: using async/await
//Task 4: crate a asyn function that waits for a promise to resolve and then logs the resolved value to the console

const promiseAsync = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve('Promise is resolved after 5 seconds');
    }, 5000)
})
async function asyncFunction() {
    const message = await promiseAsync;
    console.log(message);
}
asyncFunction();


//Task 5: create an async function that waits for a promise to rejected promise using try-catch and logs the error message to the console
const promiseAsync2 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        reject('Promise is rejected after 4 seconds');
    }, 4000)
})
async function asyncFunction2() {
    try {
        const message = await promiseAsync2;
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}
asyncFunction2();

//Activity 4 : fetching data from an API
//task 6: use the fetch api to get data form a public api and log the resposne data to the console using promise
fetch('https://jsonplaceholder.typicode.com/posts/10')
.then(response => response.json())
.then(data => console.log(data));


//task 7: use the fetch api to get data form a public api and log the resposne data to the console using async/await
async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/12');
    const data = await response.json();
    console.log(data);
}
fetchData();

//Activity 5: concurrent promises
//task 8; use promise.all to wait for multiple promises to resolve and log the resolved values to the console
const promise6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('First promise resolved for concurrent promises');
    }, 2000);
}
);
const promise7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Second promise resolved for concurrent promises');
    }, 2000);
}
);
const promise8 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Third promise resolved for concurrent promises');
    }, 2000);
}
);
Promise.all([promise6, promise7, promise8]).then((messages) => {
    console.log(messages);
})

//task 9: use promise.race to log the value of the first promise that resolves among mulitple promises
const promise9 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('First promise won race and resolved for concurrent promises');
    }, 2000);
}
);
const promise10 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Second promise won race and  resolved for concurrent promises');
    }, 3000);
}
);
const promise11 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Third promise won race and  resolved for concurrent promises');
    }, 4000);
}
);

Promise.race([promise9, promise10, promise11]).then((message) => {
    console.log(message);
})  