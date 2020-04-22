import React, { useContext } from 'react'
import {TaskContext} from '../context/TaskContext'

export default function Task({task}) {
    const {removeTask,findItem} =useContext(TaskContext)
    return (
        <div>
            <li className="list-item">
                <span>{task.title}</span>
                <div>
                    <button className="btn-delete task-btn" onClick={()=>removeTask(task.id)}>
                        Delete
                        <i className="fas fa-trash-alt"></i>
                    </button>
                    <button className="btn-delete task-btn" onClick={()=>findItem(task.id)}>
                        edit
                        <i className="fas fa-pen"></i>
                    </button>
                </div>
            </li>
        </div>
    )
}
