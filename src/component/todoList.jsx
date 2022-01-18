import React from 'react'
import { todos } from '../App'



function TodoList() {
    
    return (
        <ol>
        {todos.map(item =>{
            return(
                <li key = {todos.id}>{item.text}</li>
            )})}
        </ol>
    )
}


export { TodoList };
