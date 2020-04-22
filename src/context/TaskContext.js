import React, {createContext,useState} from 'react'
import uuid from 'uuid'
export const TaskContext = createContext();

const TaskListContextProvider = (props) =>{
    const[tasks,setTasks]=useState([
        {title:'Read a book',id:1},
        {title:'Wash the car',id:2},
        {title:'Write some code',id:3}
    ])

    const[editItem,setEditItem]=useState(null);
    const addTask = (title) =>{
        setTasks([...tasks,{title,id:uuid()}])
    }

    const removeTask = id =>{
        setTasks(tasks.filter(t=>t.id!==id))
    }

    const clearList = ()=>{
        setTasks([])
    }

    const findItem = id=>{
        const item=tasks.find(task=>task.id===id);
        setEditItem(item)
    }

    const editTask =(title,id)=>{
        const newTask=tasks.map(t=>(
            t.id===id ? {title,id} : t
        ))
        setTasks(newTask)
        setEditItem(null)
    }
  
    return (
    <TaskContext.Provider value={{tasks,addTask,removeTask,clearList,findItem,editTask,editItem}}>
        {props.children}
    </TaskContext.Provider>)
};

export default TaskListContextProvider;