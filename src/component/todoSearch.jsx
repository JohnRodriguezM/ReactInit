import React from 'react'
import '../css/stylesComponents/toDoSearch.css'

function ToDoSearch() {
    const [searchValor,setSearchValue] = React.useState('')

    const searchValue = event => 
    {
        console.log(event.target.value)
        console.clear()
        setSearchValue(event.target.value)
    };
    return (
        <section>
            <input
            placeholder="Search your task" 
            type = "text"
            value = {searchValor}
            onChange = {searchValue}
            >
            </input>
            <p>{searchValor}</p>
        </section>
    )
}

export { ToDoSearch };
