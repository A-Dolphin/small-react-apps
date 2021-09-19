import React, {useState, useEffect, useRef} from 'react'
import './ToDoList.css'

function ToDoForm(props) {
const [input, setInput] = useState('')  

const inputRef = useRef(null)

useEffect(() => {
    inputRef.current.focus()
})

const handleSubmit = e => {
    e.preventDefault()

    props.onSubmit({
        id: Math.floor(Math.random() * 100000),
        text: input
    })

    setInput('')
};


const handleChange = e => {
    setInput(e.target.value);
}



    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" 
                placeholder="add a todo" 
                value={input}
                name="text" 
                className='todo-input'
                onChange={handleChange}
                ref={inputRef}
            />

        <button className="todo-button"> Add todo</button>

        </form>
    )
}

export default ToDoForm
