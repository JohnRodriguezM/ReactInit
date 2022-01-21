import React from 'react';
import '../css/stylesComponents/toDoItems.css'






function TodoItem(props) {
    const completeOrDelete = message => alert(message);
    const [state,setState] = React.useState(false)
  return(
      /* llamo la props.text que esta pendiente por definir, en el documento en el que voy a importar esta funcion y en los demas en los que lo requiera */
    <div
    className="div-items">
        <li
            className =
            {`li-Items ${state && 'is-active-tachado-li-item'}`}>
                {props.contenido}
        </li>
        <span
            className =
            {`li-btn-say-yes ${state && 'is-active-btn-say-yes'}`}
            type = "button"
            value = {state}
            onClick = {()=>{
                setState({isToggleOn: true})
                console.log(this)
            }}
            >
        <i
            className="far fa-check-circle">
        </i>
        </span>
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