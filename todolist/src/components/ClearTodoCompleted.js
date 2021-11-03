import React from 'react'
import PropsTypes from 'prop-types'

ClearTodoCompleted.PropsTypes = {
    clearCompleted: PropsTypes.func.isRequired,
}

export default function ClearTodoCompleted(props) {
    return (
        <button onClick={props.clearCompleted} className="button">Clear Completed</button>
    )
}
