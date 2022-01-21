import React from 'react'
import '../css/stylesComponents/buttonList.css'







function ButtonList(props) {
    const btnAddTask = message => alert(message);
    
    return (
    <div>
        <>{props.children}</>
        <button
            title = "add task"
            className = "btnAddList"
            type = "button"
            onClick = {()=> btnAddTask("aqui deberia ir un modal para agg tareas")}>
        <i
            className="fas fa-plus">
        </i>
        </button>
    </div>

    )
}

export { ButtonList };