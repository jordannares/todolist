import React, {useState} from 'react'
import PropsTypes from 'prop-types'


TodoForm.PropsTypes = {
    addTodo: PropsTypes.func.isRequired,
}

export default function TodoForm(props) {

    const [todoInput, setTodoInput] = useState('');

    function handleInput(event) {
        setTodoInput(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
    
        if(todoInput.trim().length === 0){ // if input value is emty do not add 
          return;
        }

        props.addTodo(todoInput);
    
        setTodoInput('');
    }

    

    return (

        <form action="#" onSubmit={handleSubmit} >
            <input 
                type="text"
                value={todoInput}
                onChange={handleInput}
                className="todo-input"
                placeholder="What do you need to do?"
            />
        </form>
            
    )
}
