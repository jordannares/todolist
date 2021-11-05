import React, { useContext, useMemo } from 'react'
import { TodosContext } from '../context/todosContext';

export default function TodoItemsRemaining() {

    const {todos} = useContext(TodosContext);

    function remainingCalculation() {
    // console.log('remaining');
    // for(let index = 0; index < 2000000000; index++){}
    return todos.filter(todo => !todo.isComplete).length;
    }

    const remaining = useMemo(remainingCalculation, [todos]);

    return (
        <span>{remaining} items remaining</span>
    )
}
