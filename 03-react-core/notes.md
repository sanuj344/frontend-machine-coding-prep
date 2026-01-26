import { useState, useEffect, useRef } from "react";

function App() {
  // State
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Ref
  const inputRef = useRef(null);

  // useEffect (runs on mount)
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Fundamentals Demo</h1>

      {/* State Example */}
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>

      <hr />

      {/* Controlled Input */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Hello {name}</p>
      <button onClick={handleFocus}>Focus Input</button>

      <hr />

      {/* Conditional Rendering */}
      {count > 5 ? <p>Count is greater than 5</p> : <p>Count is 5 or less</p>}

      <hr />

      {/* List Rendering */}
      <ul>
        {[1, 2, 3, 4].map((num) => (
          <li key={num}>Item {num}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;



⚛️ What is React?

React is a JavaScript library used to build UI (User Interface).
It works using components.

Instead of writing full HTML pages, we build small reusable components.

Example:

Header component
Button component
Card component

🧩 Component

Component = a function that returns UI.

function Hello() {
  return <h1>Hello React</h1>;
}


This is a React component.


📦 JSX

JSX = HTML inside JavaScript.

const element = <h1>Hello World</h1>;


Behind the scenes JSX converts to:

React.createElement("h1", null, "Hello World");

📤 Props

Props are used to pass data from parent to child.

function User({ name }) {
  return <h2>Hello {name}</h2>;
}


Usage:

<User name="Sanuj" />

📥 State

State is used to store dynamic data inside a component.

const [count, setCount] = useState(0);


State change causes re-render.

🔁 useEffect

Used for:

API calls

side effects

lifecycle

useEffect(() => {
  console.log("Component mounted");
}, []);

🧠 useRef

Used to:

access DOM

store value without re-render

const inputRef = useRef();
inputRef.current.focus();

🔀 Conditional Rendering
{isLoggedIn ? <Dashboard /> : <Login />}

📃 Rendering Lists
{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}

📝 Controlled Input (Forms)
<input value={name} onChange={e => setName(e.target.value)} />

🚀 React Router (Basic)

Used for navigation.

<Route path="/login" element={<Login />} />

⚡ Performance

useMemo

useCallback

React.memo

Avoid unnecessary re-renders.

🎯 Interview Key Points

Component-based

Virtual DOM

Unidirectional data flow

Hooks

State & props

Controlled components