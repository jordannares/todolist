import React from 'react'
import PropsTypes from 'prop-types'

TodoFilters.PropsTypes = {
    todosFiltered: PropsTypes.func.isRequired,
    filter: PropsTypes.string.isRequired,
    setFilter: PropsTypes.func.isRequired,
}

export default function TodoFilters(props) {
    return (
        <div>
            <button
                onClick={() => {
                    props.setFilter('all');
                    props.todosFiltered('all');
                }}
                className={`button filter-button ${
                props.filter==='all' ? 'filter-button-active' : ''} `}
            >
                All
            </button>

            <button 
                onClick={() => {
                    props.setFilter('active');
                    props.todosFiltered('active');
                }}
                className={`button filter-button ${
                props.filter==='active' ? 'filter-button-active' : ''} `}
            >
            Active
            </button>

            <button 
                onClick={() => {
                    props.setFilter('completed');
                    props.todosFiltered('completed');
                }}
                className={`button filter-button ${
                props.filter==='completed' ? 'filter-button-active' : ''} `}
            >
            Completed
            </button>
        </div>
    )
}
