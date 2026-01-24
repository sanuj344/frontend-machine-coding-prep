/***********************
  VARIABLES IN JAVASCRIPT
***********************/

// let -> value can be changed
let a = 10;
a = 15; // allowed

// const -> value cannot be reassigned
const b = 20;
// b = 30; ❌ Error (not allowed)

console.log(a, b);


/***********************
  DATA TYPES
***********************/

// String
let name = "Sanuj";

// Boolean
let isReady = true;

// Number
let count = 5;

// Undefined
let notDefined;

// Null
let emptyValue = null;

console.log(name, isReady, count, notDefined, emptyValue);


/***********************
  FUNCTIONS
***********************/

// Normal function
function add(x, y) {
  return x + y;
}

console.log(add(2, 3)); // 5


// Arrow function (shorter syntax)
const multiply = (x, y) => {
  return x * y;
};

console.log(multiply(2, 3)); // 6


/***********************
  ARRAYS
***********************/

const nums = [1, 2, 3, 4];

// map -> transforms each element
const doubled = nums.map((n) => {
  return n * 2;
});
console.log(doubled); // [2,4,6,8]

// filter -> selects elements based on condition
const even = nums.filter((n) => {
  return n % 2 === 0;
});
console.log(even); // [2,4]

// reduce -> combines all values into one
const sum = nums.reduce((acc, n) => {
  return acc + n;
}, 0);
console.log(sum); // 10


/***********************
  OBJECTS
***********************/

const user = {
  name: "John",
  age: 25
};

console.log(user.name); // John
console.log(user.age);  // 25


/***********************
  DESTRUCTURING
***********************/

// Extract values from object
const { name: userName, age } = user;

console.log(userName); // John
console.log(age);      // 25


/***********************
  SPREAD OPERATOR
***********************/

// Copy object and add new property
const newUser = {
  ...user,
  city: "Delhi"
};

console.log(newUser);


/***********************
  ASYNC & AWAIT (API CALL)
***********************/

// async function is used for API calls
async function fetchData() {
  try {
    // fetch data from API
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // convert response to JSON
    const data = await response.json();

    console.log("API Data:", data);
  } catch (error) {
    // error handling
    console.log("Error:", error);
  }
}

// call the function
fetchData();
