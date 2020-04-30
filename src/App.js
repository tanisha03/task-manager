import React from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import TaskListContextProvider from './context/TaskContext'
import styled from '@emotion/styled'

const Main= styled.div`
 width:40vw;
 background-color:pink;
 padding:10%;
 margin: 20vh auto;
 text-align:center;
`;

export default function App() {
    return (
        <TaskListContextProvider>
        {/* <div className="container"> */}
        {/* <div className="app-wrapper"> */}
        <Main>
            <TaskForm/>
            <TaskList/>
        </Main>
        {/* </div> */}
        {/* </div> */}
        </TaskListContextProvider>
    )
}
