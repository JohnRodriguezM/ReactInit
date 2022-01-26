import React from 'react';
import '../css/stylesComponents/toDoItems.css'






function TodoItem(props) {

    const [state2,setState2] = React.useState(false);

    const completeOrDelete = message => alert(message);
    
  return(
      /* llamo la props.text que esta pendiente por definir, en el documento en el que voy a importar esta funcion y en los demas en los que lo requiera */
    <div
    className="div-items">
        <li
            className =
            {`li-Items ${state2 && 'is-active-tachado-li-item'}`}>
                {props.contenido}
        </li>
        <label>
        <input
            className =
            {`li-btn-say-yes ${state2 && 'is-active-btn-say-yes'}`}
            type = "checkbox"
            value = {state2}
            onClick = {(event)=>{
                setState2(event.target.checked)
                console.log(event.target.checked)
            }}
            >
        {/* <i
            className="far fa-check-circle">
        </i> */}
        </input>
        </label>
        <span
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
        </span>
    </div>
)
}

export { TodoItem };

/* onClick = {(e) =>{completeOrDelete(`haz completado tu tarea ${props.contenido}`)
            console.log(e.target)}} */