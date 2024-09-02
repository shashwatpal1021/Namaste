//  data type in js
// 1. number
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6. object
// 7. symbol
// 8. bigint

// define symbol with example
let symbola = Symbol();
let symbolb = Symbol();
// console.log(a == b);

// what is prototype in js
// every function & object has a property by default called prototype.

// what is prototype chainning in js
// prototype chainning is a concept in js which is used to access the 
// properties of the parent class in the child class.
// example:

class A {
  constructor() {
    this.a = 10;
  }
}

class B extends A {
  constructor() {
    super();
    this.b = 20;
  }
}

class C extends B {
  constructor() {
    super();
    this.c = 30;
  }
}

let obj = new C();
// console.log(obj);


// define Scope in js
// 1. global scope
// 2. local scope
// 3. function scope
// 4. block scope

// 1. global scope
// Variables declared outside of any function or block are in the global scope.
// Global variables are accessible from anywhere in the code, including within functions.

var globalVar = "I'm global";

function exampleFunction() {
  console.log(globalVar); // Accessible here
}

console.log(globalVar); // Accessible here too

//2. function scope:
// Variables declared inside a function are in function scope.
// These variables are only accessible within that function.
function exampleFunction() {
  var functionScopedVar = "I'm inside a function";
  console.log(functionScopedVar); // Accessible here
}

// console.log(functionScopedVar); // Error: functionScopedVar is not defined

//3. block scope:
// Introduced with ES6, let and const allow for block - level scope.
// Variables declared inside a block({}) are only accessible within that block.

if (true) {
  let blockScopedVar = "I'm inside a block";
  console.log(blockScopedVar); // Accessible here
}

// console.log(blockScopedVar); // Error: blockScopedVar is not defined

//4. lexical scope:
// JavaScript uses lexical scoping(also known as static scoping), meaning
//  that the scope of a variable is determined by its location within the 
// source code and nested functions have access to variables declared in their outer scope.

function outerFunction() {
  var outerVar = "I'm from the outer function";

  function innerFunction() {
    console.log(outerVar); // Accessible here
  }

  innerFunction();
}

outerFunction();


// Hoisting
// Variables declared with var are hoisted to the top of their 
// scope(either function or global scope), but their initialization is not.
// This can lead to undefined if accessed before the initialization.
// Variables declared with let and const are also hoisted but remain in a
// "temporal dead zone" until the code execution reaches the declaration

// temporal dead zone
// The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs 
// when using let and const to declare variables.The TDZ is the period 
// from the start of the block until the variable is declared and initialized.


// IIFE
// An IIFE (Immediately Invoked Function Expression) is a function in 
// JavaScript that is defined and executed immediately after it is created.
// It's a common pattern used to create a new scope to avoid polluting the 
// global namespace, particularly useful in older JavaScript before the
//  introduction of let, const, and modules.

// Benifits of using IIFE:
// 1. Avoid global variable Pollution.
// 2. Encaplusulation.
// 3. Isolated Execution Context.
(() => {
  console.log("IIFE executed");
})


// first-order-function
// Does Not Accept Functions as Arguments: It only takes simple 
// values as parameters (like strings, numbers, or objects).
// Does Not Return Functions: It returns a value that is not a function.
function add(a, b) {
  return a + b;
}

const result = add(5, 3);
console.log(result); // Output: 8

// Higher -order-function
// Higher - order functions are functions that either take one or 
// more functions as arguments, return a function, or both.
// Examples include functions like map, filter, reduce, or a 
// function that returns another function.

function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(5)); // Output: 10


//Event listeners are functions or handlers that are attached 
// to an element and are executed when a specific event occurs
document.getElementById("myButton").addEventListener("click", function () {
  alert("Button was clicked!");
});
// event propagation.
// Events in JavaScript have a propagation phase that can be controlled:
// Capturing Phase: The event is captured from the root element down to the target element.
// Bubbling Phase: The event bubbles up from the target element to the root.

// js is single threaded language. meaning it executes one operation 
// at a time in a single sequence
// benefit: A single - threaded model simplifies the programming model 
// by avoiding complex issues like race conditions, deadlocks, 
// and concurrency problems that arise with multi - threading.
// This makes it easier for developers to write and maintain 
// JavaScript code that is efficient and reliable.

// event loop mechanism:
// JavaScript uses an event loop to handle asynchronous operations 
// like network requests, timers, and I / O events.The event loop allows 
// JavaScript to appear concurrent by offloading tasks to the 
// browser(or a JavaScript runtime environment like Node.js) and then picking 
// them up once they are ready to be processed.
// The event loop ensures that the main thread remains non - blocking, 
// allowing JavaScript to handle long - running tasks(like fetching data from a server)
//  without freezing the UI.


// How does the event loop work in a single threaded environment?
// Even though JavaScript is single - threaded, it can manage a
// synchronous operations through the event loop, which works in conjunctio
// n with a task queue(or message queue) and a call stack.

// 1.call stack
// JavaScript executes functions in a stack - like structure called 
// the call stack.Functions are pushed onto the stack when they are called 
// and popped off when they return.

// 2. web API:
// When an asynchronous operation(like an HTTP request or a timer) is called, 
// it’s handed off to a Web API(provided by the browser or Node.js), which handles
//  the operation outside the main thread.

// 3. callback queue (Task Queue)
// Once the asynchronous operation completes, its callback is placed in the
//  callback queue(or task queue), waiting to be executed.

// 4. event loop
// The event loop continuously checks if the call stack is empty.If it is, 
// it dequeues the first task in the callback queue and pushes its callback
// function onto the call stack for execution.

// closure
// it is a powerful feature where an inner function has access to variables
//  from its outer function even after the outer function has finished executing.
// Closures are a fundamental concept that enables functions to "remember" the environment
//  in which they were created, which includes any variables and arguments from their parent scope.

function outerFunction() {
  const outerVariable = "I am from the outer scope";

  function innerFunction() {
    console.log(outerVariable); // Accesses the variable from the outer scope
  }

  return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Output: "I am from the outer scope"



// promise
// Promises provide a powerful and elegant way to manage asynchronous operations
//  in JavaScript.They represent eventual completion or failure of an 
// asynchronous operation and allow chaining of operations.By using methods like 
// then, catch, and finally, and utilities like Promise.all and Promise.race,
//  you can handle complex asynchronous workflows more effectively and cleanly.
// A function that returns a promise
function fetchData(url) {
  return new Promise((resolve, reject) => {
    // Simulate an async operation (e.g., fetching data from a server)
    setTimeout(() => {
      if (url === "https://example.com") {
        resolve("Data fetched successfully!");
      } else {
        reject("Error fetching data.");
      }
    }, 2000);
  });
}

// Using the promise
fetchData("https://example.com")
  .then(result => {
    console.log(result); // Output: "Data fetched successfully!"
  })
  .catch(error => {
    console.error(error); // Output: "Error fetching data." (if URL is different)
  });
