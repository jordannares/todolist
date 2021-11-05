import React, {useContext, useState} from 'react'
import { TodosContext } from '../context/todosContext';


export default function TodoForm() {

    const {todos, setTodos, idForTodo, setIdForTodo} = useContext(TodosContext);

    const [todoInput, setTodoInput] = useState('');

    function handleInput(event) {
        setTodoInput(event.target.value);
    }

    function addTodo(event){
        event.preventDefault();
    
        if(todoInput.trim().length === 0){ // if input value is emty do not add 
          return;
        }

        // props.addTodo(todoInput);
        setTodos([
            ...todos, 
            {
                id: idForTodo,
                title: todoInput,
                isComplete: false
            },
        ]);
    
        setIdForTodo((prevIdForTodo) => prevIdForTodo + 1); //increament todo id
    
        setTodoInput('');
    }

    

    return (

        <form action="#" onSubmit={addTodo} >
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
