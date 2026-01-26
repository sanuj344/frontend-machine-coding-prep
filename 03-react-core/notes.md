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
