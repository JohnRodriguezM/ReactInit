import React from 'react'
import '../css/stylesComponents/toDoCounter.css'

function ToDoCounter({ total,completed }) {
    return (
        
        <div className = "header-counter">
        <h1>Hey what's up?{/* 🤙 */}</h1>
        {/* <p style = {{
            fontSize : '25px',
        }}>🤙</p> */}
        <p>You have completed {completed} of {total} tasks</p>
        </div>
    )
}

export { ToDoCounter };