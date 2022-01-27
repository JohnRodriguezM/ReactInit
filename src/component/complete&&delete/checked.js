import React from 'react';
// pendiente de llamar
function Checked({state2,setState2}) {
  return (<label>
    <input  className =
            {`li-btn-say-yes ${state2 && 'is-active-btn-say-yes'}`}
            type = "checkbox"
            value = {state2}
            onClick = {(event)=>{
                setState2(event.target.checked)
                console.log(event.target.checked)
            }}>
    
    </input>
  </label>);
}

export {Checked}