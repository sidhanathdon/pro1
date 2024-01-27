import React,{useState} from 'react'
import "./style.css"
const ToDoList = () => {
    const [task,setTask]=useState([]);
    const [newTask,setNewTask]=useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim()!==""){
            setTask(t=>[...t,newTask])
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks=task.filter((_,i)=>i!==index)
        setTask(updatedTasks)
    }

    function moveTaskUp(index){
        if(index>0){
            const updatedTasks=[...task];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]]
            setTask(updatedTasks)
        }
    }

    function moveTaskDown(index){
        if(index<task.length-1){
            const updatedTasks=[...task];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]]
            setTask(updatedTasks)
        }
    }
  return (
    <div className='to-do-list'>
        <h1>To-Do-List</h1>
        <div>
            <input 
                type="text"
                placeholder='Enter a task...'
                value={newTask}
                onChange={handleInputChange}
            />
            <button
                className='add-btn'
                onClick={addTask}
            >
                Add
            </button>
        </div>
        <ol>
            {task.map((elem,index)=>
            <li key={index}>
                <span className='text'>{elem}</span>
                <button className='delete-btn' onClick={()=>deleteTask(index)}>
                    Delete
                </button>
                <button className='move-btn' onClick={()=>moveTaskUp(index)}>
                    ☝
                </button>
                <button className='move-btn' onClick={()=>moveTaskDown(index)}>
                    👇
                </button>
            </li>)}
        </ol>
    </div>
  )
}

export default ToDoList