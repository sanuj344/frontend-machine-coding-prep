1️⃣ let vs const

let → can change value
const → cannot reassign

2️⃣ Arrow function vs normal function

shorter syntax
no own this

3️⃣ map / filter / reduce

Used heavily in React:

map → render lists
filter → search
reduce → calculate totals

4️⃣ Destructuring

Used in React props:

function Profile({ name, age }) {}

5️⃣ Spread operator

Used in state updates:

setUser({ ...user, city: "Delhi" });

6️⃣ async/await

Used for API calls in React:

useEffect(() => {
  fetchData();
}, []);



Closure

Used in:
counters
private variables
debounce/throttle

Event Loop

Priority:

Call stack
Microtask queue (Promise)
Macrotask queue (setTimeout)

Debounce vs Throttle

Debounce → search input
Throttle → scroll, resize

call/apply/bind

Used when changing this