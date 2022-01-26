/* import logo from './assets/logo.svg';*/
import './css/App.css';

import React from 'react'

// importar primer compoenente de prueba
/*  import { Saludo } from "./component/primero"; */

// se importa el componented del ToDoCounter
import { ToDoCounter } from './component/todoCounter';
// se importa el componente del ToDoSearch
import { ToDoSearch } from "./component/todoSearch";
// se importa el componente del boton
import { ButtonList } from "./component/buttonList";
// se importa la lista de tareas TodoList..
import { TodoList } from './component/todoList';
// se importan los todoItems
import { TodoItem } from './component/TodoItem';

// este es temporal
import { Prueba } from "./component/prueba";

export const defaulttodos = [
  {
    text: "picar la cebolla",
    id: "cebollin",
    complete: false,
  },
  {
    text: "ver el partido de futbol con mis amigos y llevar el pollo asado a la casa",
    id: "partidoAmigos",
    complete: true,
  },
  /* {
    text: "analizar el codigo",
    id : "workEveryDay",
    complete: false,
  }, */
]
// Las props son estaticas, nunca se pueden modificar



function App() {
  /* to:  toDoSearch */

  const [searchValor,setSearchValue] = React.useState('')

  /* to array de obejtos to:dos  componente actual (App)*/

  const [todos,setTodos] = React.useState(defaulttodos);

// para los todos completados- componente todoCounter
const completedTodos = todos.filter(elemento => !!elemento.complete).length;
const totalTodos = todos.length;






  return (
    <React.Fragment>  {/* */}
    <ToDoCounter
    total = {totalTodos}
    completed = {completedTodos}
    />
      
    
        {/* me llama el h1 principal para el documento */}
        <ToDoSearch
        
            searchValor={searchValor}
            setSearchValue={setSearchValue}
        />
        {/* lleva un input text por dentro */}

        {/* por aqui va el todolist
 */}    <TodoList>

          {todos.map((item)=>{
            return(
              <TodoItem
            complete = {item.complete}
            contenido = {item.text}
            key = {item.id}
            />
            )
          })}
        </TodoList>

      <ButtonList>
      <Prueba/> {/* traigo un p para el "titulo de la app, usando el props.children" */}
      </ButtonList>
      
        {/* se llama el boton para agregar las tareas */}
      {/* <Saludo /> */}
      {/* el componenete saludo se comenta por falta de uso en este momento */}
    </React.Fragment>
  );
}

export default App;
