import React from 'react';

function Lista({state2,contenido}) {
  return (
     <li

        className =
        {`li-Items ${state2 && 'is-active-tachado-li-item'}`}>
            {contenido}
    </li>
  );
}

export {Lista}
