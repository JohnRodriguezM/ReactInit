import React from 'react';

function TodoItem(props) {
  return(
      /* llamo la props.text que esta pendiente por definir, en el documento en el que voy a importar esta funcion y en los demas en los que lo requiera */
    <>
        <li>
            {props.contenido}
        </li>
        <button type = "button">yes</button>
        <button type = "button">x</button>
    </>
)
}

export { TodoItem };
