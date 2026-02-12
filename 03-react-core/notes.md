

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