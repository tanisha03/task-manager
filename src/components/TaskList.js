 import React,{useContext} from 'react'
 import {TaskContext} from '../context/TaskContext'
 import Task from './Task'
 
 function TaskList() {
     const {tasks}=useContext(TaskContext);
     return (
         <div>
             {tasks.length?
             <ul className="list">
                 {tasks.map(task=>{
                     return <Task task={task} key={task.id}/>
                 })}
             </ul>:
             <div className="no-tasks">No Tasks</div>
             }

         </div>
     )
 }
 
 export default TaskList
 