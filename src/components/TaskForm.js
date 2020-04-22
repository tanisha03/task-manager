import React,{useContext,useState,useEffect} from 'react'
import {TaskContext} from '../context/TaskContext'


export default function TaskForm() {
    const {addTask,clearList,editTask,editItem}=useContext(TaskContext);

    const [title,setTitle] =useState("");
    const [editOn,setEditOn]=useState(false);
    const handleChange=e=>{
        setTitle(e.target.value);
    }

    const handleSubmit = e=>{
        e.preventDefault();
        if(editItem===null){
        addTask(title);
        setTitle("");
        }
        else {
            editTask(title,editItem.id)
        }
        setEditOn(false);
    }

    useEffect(() => {
        if(editItem){
            setEditOn(true);
            setTitle(editItem.title)
        }
        else{
            setTitle("")
        }
        
    }, [editItem])


     return (
        <form className="form" onSubmit={handleSubmit}>
            <input type="text"
            onChange={handleChange}
            value={title} className="task-input" placeholder="Add Task..." required/>
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">{editOn? "Edit Task":"Add Task"}</button>
                <button className="btn clear-btn" onClick={clearList}>Clear</button>
            </div>
        </form>
    )
}
