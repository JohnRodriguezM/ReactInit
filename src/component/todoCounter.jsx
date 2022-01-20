import React from 'react'
import '../css/stylesComponents/toDoCounter.css'

function ToDoCounter(props) {
    
    return (
        
        <div className = "header-counter">
        <h1>Hey what's up?{/* 🤙 */}</h1>
        {/* <p style = {{
            fontSize : '25px',
        }}>🤙</p> */}
        <p>You have completed two of three tasks</p>
        </div>
    )
}

export { ToDoCounter };