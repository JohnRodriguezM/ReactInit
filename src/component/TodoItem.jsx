import React from 'react';
import '../css/stylesComponents/toDoItems.css'

import { Checked } from "./complete&&delete/checked"
import { Delete } from "./complete&&delete/delete"
import {Lista} from "./complete&&delete/lista"




function TodoItem({contenido, state2, setState2,children}) {

    

    const completeOrDelete = message => alert(message);
    
  return(
      /* llamo la props.text que esta pendiente por definir, en el documento en el que voy a importar esta funcion y en los demas en los que lo requiera */
    <div
    className="div-items">
    <li>{children}</li>
    
        {/* <li
        
            
            className =
            {`li-Items ${state2 && 'is-active-tachado-li-item'}`}>
                {contenido}
        </li> */}
        
        <Checked
            state2 = {state2}
            setState2 = {setState2}
        />


        <Delete
            contenido = {contenido}
        />
        {/* <span
            title = "delete"
            className = "li-btn-delete"
            type = "button"
            onClick = {()=>{
                setTimeout(()=>{completeOrDelete(`haz eliminado la tarea ${props.contenido}`)},500)
            }}
            >
        <i
            className="fas fa-trash-alt">
        </i>
        </span> */}
    </div>
)
}

export { TodoItem };

/* onClick = {(e) =>{completeOrDelete(`haz completado tu tarea ${props.contenido}`)
            console.log(e.target)}} */