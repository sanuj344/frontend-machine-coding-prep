/*********************************
  1. SCOPE & HOISTING
*********************************/

// Scope = where a variable can be accessed

// var -> function scoped
// let & const -> block scoped

function testScope() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }

  console.log(a); // ✅ works
  // console.log(b); ❌ error
  // console.log(c); ❌ error
}

testScope();

// Hoisting = variables and functions are moved to top before execution

console.log(x); // undefined (not error)
var x = 5;

// console.log(y); ❌ ReferenceError
let y = 10;


/*********************************
  2. CLOSURE
*********************************/

// Closure = function remembers variables from its outer scope

function outerFunction() {
  let count = 0;

  function innerFunction() {
    count++;
    console.log(count);
  }

  return innerFunction;
}

const counter = outerFunction();

counter(); // 1
counter(); // 2
counter(); // 3


/*********************************
  3. THIS KEYWORD
*********************************/

const person = {
  name: "Sanuj",
  greet: function () {
    console.log("Hello " + this.name);
  }
};

person.greet(); // Hello Sanuj

// this inside arrow function
const obj = {
  name: "Rahul",
  greet: () => {
    console.log(this.name); // undefined
  }
};

obj.greet();


/*********************************
  4. CALL, APPLY, BIND
*********************************/

function sayHello(city) {
  console.log("Hello " + this.name + " from " + city);
}

const user1 = { name: "Amit" };

sayHello.call(user1, "Delhi");      // call
sayHello.apply(user1, ["Mumbai"]);  // apply

const boundFunc = sayHello.bind(user1);
boundFunc("Bangalore");             // bind


/*********************************
  5. EVENT LOOP
*********************************/

// JS is single-threaded
// Event loop manages async operations

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// Output:
// Start
// End
// Promise
// Timeout


/*********************************
  6. PROMISES
*********************************/

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task done");
  } else {
    reject("Task failed");
  }
});

myPromise
  .then((res) => console.log(res))
  .catch((err) => console.log(err));


/*********************************
  7. ASYNC / AWAIT
*********************************/

async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getData();


/*********************************
  8. DEBOUNCING
*********************************/

// Debouncing = run function only after delay

function debounce(fn, delay) {
  let timer;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}

const search = debounce(() => {
  console.log("Searching...");
}, 1000);

search();
search();
search();
// will run only once after 1 second


/*********************************
  9. THROTTLING
*********************************/

// Throttling = allow function once per time interval

function throttle(fn, limit) {
  let flag = true;

  return function () {
    if (flag) {
      fn();
      flag = false;

      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
}

const clickHandler = throttle(() => {
  console.log("Clicked");
}, 2000);

clickHandler();
clickHandler();
clickHandler();


/*********************************
  10. POLYFILL FOR MAP
*********************************/

Array.prototype.myMap = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

const arr = [1, 2, 3];

const output = arr.myMap((num) => num * 2);

console.log(output); // [2,4,6]


/*********************************
  11. COMMON INTERVIEW TRICK
*********************************/

for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Output: 4 4 4 (because var is function scoped)

for (let j = 1; j <= 3; j++) {
  setTimeout(() => {
    console.log(j);
  }, 1000);
}
// Output: 1 2 3
