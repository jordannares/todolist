import React from 'react'
import PropsTypes from 'prop-types'

TodoCompleteAll.PropsTypes = {
    completeAllTodos: PropsTypes.func.isRequired,
}


export default function TodoCompleteAll(props) {
    return (
        <div>
            <div onClick={props.completeAllTodos} className="button">Check All</div>
        </div>
    )
}
