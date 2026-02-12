import { useState } from "react";

function TodoItem({ todo, onDelete, onToggle, onEdit}){

const[isEditing,setIsEditing] = useState(false);
const [value, setValue] = useState(todo.text);


function handleSave(){

onEdit(todo.id,value);
setIsEditing(false);


}


return(


<div className="todo-item">
    <input 
    type="checkbox"
    checked = {todo.completed}
    onChange={()=> onToggle(todo.id)}
    />
{isEditing ? (
    <input 
    value = {value}
    onChange={(e)=> setValue(e.target.value)}
    />
) :(
  <span className={todo.completed ? "completed" : ""}>
    {todo.text}
  </span>

)}

{isEditing ?(
<button onClick={handleSave}>Save</button>
):(
<button onClick={() => setIsEditing(true)}>Edit</button>
)}

 <button onClick={() => onDelete(todo.id)}>Delete</button>

</div>



);


}

export default TodoItem;
