import React from 'react'
import '../css/stylesComponents/toDoSearch.css'

function ToDoSearch({searchValor,setSearchValue}) {
    

    const searchValue = event =>
    {
       console.log(event.target.value)
        
      /*   setSearchValue(event.target.value)  */
    };
    return (
        /* value = {searchValor} */
        <section>
            <input
            className = "inputSearch"
            placeholder="Search your task"
            type = "text"
            
            onChange = {searchValue}
            >
            </input>
        </section>
    )
}

export { ToDoSearch };
