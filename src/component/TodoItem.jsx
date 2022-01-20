import React from 'react';
import '../css/stylesComponents/toDoItems.css'

function TodoItem(props) {
  return(
      /* llamo la props.text que esta pendiente por definir, en el documento en el que voy a importar esta funcion y en los demas en los que lo requiera */
    <div className="div-items">
        <li className = {`li-Items ${props.complete && 'is-active-tachado-li-item'}`}>
            {props.contenido}
        </li>
        <span className = "li-btn-say-yes"  type = "button"><i className="far fa-check-circle"></i></span>
        <span title = "delete" className = "li-btn-delete" type = "button"><i className="fas fa-trash-alt"></i></span>
    </div>
)
}

export { TodoItem };
