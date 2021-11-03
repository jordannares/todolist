import React from 'react'
import PropsTypes from 'prop-types'

TodoItemsRemaining.PropsTypes = {
    remaining: PropsTypes.func.isRequired,
}

export default function TodoItemsRemaining(props) {
    return (
        <span>{props.remaining()} items remaining</span>
    )
}
