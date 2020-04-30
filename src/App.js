import React from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import TaskListContextProvider from './context/TaskContext'
import "./App.css"

export default function App() {
    return (
        <TaskListContextProvider>
        <div className="container">
        <div className="app-wrapper">
        <div className="main">
            <TaskForm/>
            <TaskList/>
        </div>
        </div>
        </div>
        </TaskListContextProvider>
    )
}
