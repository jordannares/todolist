import React from 'react'
import PropsTypes from 'prop-types'

TodoItemsRemaining.PropsTypes = {
    remaining: PropsTypes.number.isRequired,
}

export default function TodoItemsRemaining(props) {
    return (
        <span>{props.remaining} items remaining</span>
    )
}
