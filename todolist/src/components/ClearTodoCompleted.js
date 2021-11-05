import React, { useContext } from 'react'
import { TodosContext } from '../context/todosContext';

export default function ClearTodoCompleted() {

    const {todos, setTodos} = useContext(TodosContext);

    function clearCompleted() {
        setTodos([...todos].filter(todo => !todo.isComplete));
    }

    return (
        <button onClick={clearCompleted} className="button">Clear Completed</button>
    )
}
