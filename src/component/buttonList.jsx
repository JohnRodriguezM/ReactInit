import React from 'react'
import '../css/stylesComponents/buttonList.css'


function ButtonList() {
    return (
       <button title = "add task" className = "btnAddList" type = "button"><i className="fas fa-plus"></i></button>
    )
}

export { ButtonList };