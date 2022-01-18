/* import logo from './assets/logo.svg';
import './css/App.css'; */

import React from 'react'

// importar primer compoenente de prueba
 import { Saludo } from "./component/primero";

// se importa el componented del ToDoCounter
import { ToDoCounter } from './component/todoCounter';
// se importa el componente del ToDoSearch
import { ToDoSearch } from "./component/todoSearch";
// se importa el componente del boton
import { ButtonList } from "./component/buttonList";
// se importa la lista de tareas TodoList..
import { TodoList } from './component/todoList';

export const todos = [
  {
    text: "picar la cebolla",
    id: "cebollin"
  },
  {
    text: "ver el partido de futbol con mis amigos",
    id: "partidoAmigos"
  },
  {
    text: "analizar el codigo",
    id : "wordEveryDay"
  }
]



function App() {
  return (
    <React.Fragment>
      <ToDoCounter />
        {/* me llama el h1 principal para el documento */}
      <ToDoSearch />
        {/* lleva un input text por dentro */}

        {/* por aqui va el todolist
 */}
        <TodoList/>


      <ButtonList />
        {/* se llama el boton para agregar las tareas */}
      {/* <Saludo /> */}
      {/* el componenete saludo se comenta por falta de uso en este momento */}
    </React.Fragment>
  );
}

export default App;
