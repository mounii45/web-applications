import { useState } from 'react';
import './App.css'

import {v4 as uuidv4} from 'uuid';

function App() {
  //2 states or hooks -> arr of object state to maintin todo & string state to have the activity
  //each task will have id
   let [arr,setArr]=useState([{task:"sample",id:uuidv4()}]);
   let [newTodo,setNewTodo]=useState("");

    

    let AddNewTask=()=>{
       setArr((prevArr)=>{
          return [...prevArr,{task:newTodo,id:uuidv4()}];
        })
        setNewTodo("")
    }

    let deleteTodo=(id)=>{
       let newCopy =arr.filter((todo)=>todo.id!=id);
        setArr(newCopy);
    }
    
     let editTodo=(sentTodo)=>{
       let newCopy =arr.filter((todo)=>todo.id!=sentTodo.id);
        setArr(newCopy);
        setNewTodo(sentTodo.task);
    }

    let Add=(event)=>{
         setNewTodo(event.target.value)//input val string updates when chr are typing
         //but the task will be updated only when add button is clicked with newTodo
    }
    
  return (
    <div>
      <h1>To-do List</h1>
      <input type='text' name="task" value={newTodo} onChange={Add} className='inpSize'></input>
      <br></br>
      <br></br>
      <button onClick={AddNewTask}>Add</button>
      <hr></hr>
        <table>{
      arr.map((todo) => (
        <tr key={todo.id}>
          <td>
            <input type='checkbox'></input>
          </td>
          <td>
          <span>{todo.task}</span>
          </td>

          <td>
        <button onClick={()=>editTodo(todo)}><i class="fa-regular fa-pen-to-square fa-sm"></i></button>
          </td>

         <td>
        <button onClick={()=>deleteTodo(todo.id)}> <i className="fa-solid fa-trash fa-sm"></i> </button>  
        </td>

        </tr>
      
      ))
    }

    </table>
    </div>
  )
}

export default App
