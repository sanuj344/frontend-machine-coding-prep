import { useState, useContext, createContext, useMemo, useCallback } from "react";

/*********************************
  1. LIFTING STATE UP
*********************************/

// Parent controls the state
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Parent Count: {count}</h2>
      <Child count={count} setCount={setCount} />
    </div>
  );
}

function Child({ count, setCount }) {
  return (
    <button onClick={() => setCount(count + 1)}>
      Increment from Child
    </button>
  );
}


/*********************************
  2. PROP DRILLING
*********************************/

// Passing props through many levels (bad practice)
function GrandParent() {
  const [user] = useState("Sanuj");
  return <ParentComponent user={user} />;
}

function ParentComponent({ user }) {
  return <ChildComponent user={user} />;
}

function ChildComponent({ user }) {
  return <h3>Hello {user}</h3>;
}


/*********************************
  3. CONTEXT API (Solution to Prop Drilling)
*********************************/

const UserContext = createContext();

function ContextParent() {
  const [user] = useState("Sanuj");

  return (
    <UserContext.Provider value={user}>
      <ContextChild />
    </UserContext.Provider>
  );
}

function ContextChild() {
  const user = useContext(UserContext);
  return <h3>Hello {user}</h3>;
}


/*********************************
  4. CUSTOM HOOK
*********************************/

// Custom hook for counter logic
function useCounter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return { count, increment };
}

function CounterComponent() {
  const { count, increment } = useCounter();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}


/*********************************
  5. useMemo
*********************************/

// Prevents heavy calculation on every render
function ExpensiveComponent({ number }) {
  const squared = useMemo(() => {
    console.log("Calculating...");
    return number * number;
  }, [number]);

  return <p>Square: {squared}</p>;
}


/*********************************
  6. useCallback
*********************************/

// Prevents recreation of function
function Button({ handleClick }) {
  return <button onClick={handleClick}>Click</button>;
}

function ParentWithCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <>
      <Button handleClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Update Count</button>
    </>
  );
}


/*********************************
  7. React.memo
*********************************/

// Prevents re-render if props unchanged
const MemoComponent = React.memo(function ({ value }) {
  console.log("Rendering MemoComponent");
  return <p>{value}</p>;
});


/*********************************
  8. ERROR BOUNDARY (Class Component)
*********************************/

import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}


/*********************************
  9. FOLDER STRUCTURE (BEST PRACTICE)
*********************************/

/*
src/
 ├── components/
 │     ├── Button.jsx
 │     ├── Header.jsx
 │     ├── Card.jsx
 ├── hooks/
 │     └── useCounter.js
 ├── pages/
 │     ├── Home.jsx
 │     ├── Login.jsx
 ├── context/
 │     └── UserContext.js
 └── App.jsx
*/


/*********************************
  10. INTERVIEW KEY POINTS
*********************************/

/*
- Lifting state up = shared state
- Context API = avoid prop drilling
- Custom hooks = reusable logic
- useMemo = memoize value
- useCallback = memoize function
- React.memo = memoize component
- Error Boundary = catch crashes
*/
