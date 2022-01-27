import React from 'react';

function Delete({contenido}) {
  return (
    <span
    title = "delete"
    className = "li-btn-delete"
    type = "button"
    onClick = {()=>{
        setTimeout(()=>{alert(`haz eliminado la tarea ${contenido}`)},500)
    }}
    >
<i
    className="fas fa-trash-alt">
</i>
</span>
  );
}

export {Delete}