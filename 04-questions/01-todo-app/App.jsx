import { useEffect,useState } from "react";
import TodoItem  from "./TodoItem";
import "./style.css"

function App(){
    

const [todos,setTodos] = useState([]);
const [input,setInput] = useState("");

 /*********************************
    LOAD FROM LOCAL STORAGE
  *********************************/
useEffect(()=>{
    const stored = localStorage.getItem("todos");
    if(stored){
        setTodos(JSON.parse(stored));
    }
})
  /*********************************
    SAVE TO LOCAL STORAGE
  *********************************/
useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
},[todos]);

  /*********************************
    ADD TODO
  *********************************/

function handleAdd(){

if(!input.trim()) return;


const newTodo = {
id: Date.now(),
text: input,
completed:false

};
setTodos([...todos,newTodo]);
setInput("");

}

  /*********************************
    DELETE TODO
  *********************************/
function handleDelete(id){
    setTodos(todos.filter((t)=> t.id !==id));

}
 /*********************************
    TOGGLE TODO
  *********************************/
function handleToggle(id){

    setTodos(
todos.map(t => t.id === id ? {...t, completed: !t.completed} : t)
    )
    
}

  /*********************************
    EDIT TODO
  *********************************/
 function handleEdit(id, newText) {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, text: newText } : t
      )
    );
  }


return (


<div className="app">
    <h1>Todo App</h1>

<div className="add-section">

<input
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder="Enter task.."
/>

<button onClick={handleAdd}>Add</button>
</div>

<div className="list">



{todos.map((todo)=>{


<TodoItem
key = {todo.id}
todo = {todo}
onDelete={handleDelete}
onToggle={handleToggle}
onEdit={handleEdit}

/>




})}


</div>


</div>


);

}
export default App;