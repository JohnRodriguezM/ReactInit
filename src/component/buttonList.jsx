import React from 'react'
import '../css/stylesComponents/buttonList.css'


function ButtonList(props) {
    return (
        <div>
       <>{props.children}</>
       <button title = "add task" className = "btnAddList" type = "button"><i className="fas fa-plus"></i></button>
       </div>

    )
}

export { ButtonList };