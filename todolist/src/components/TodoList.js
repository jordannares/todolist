import React from 'react'
import PropsTypes from 'prop-types'
import deleteIcon from '../assets/svg/delete-icon.svg';

TodoList.PropsTypes = {
    todos: PropsTypes.func.isRequired,
    completeTodo: PropsTypes.func.isRequired,
    markAsEditing: PropsTypes.func.isRequired,
    updateTodo: PropsTypes.func.isRequired,
    escapeEditing: PropsTypes.func.isRequired,
    deleteTodo: PropsTypes.func.isRequired
}

export default function TodoList(props) {


    return (

        <ul className="todo-item-list">

              { props.todos.map(( todo, index ) => (

              <li key={todo.id} className="todo-item-container">
                <div className="todo-item">
                  <input type="checkbox" onChange={() => props.completeTodo(todo.id)} checked={todo.isComplete ? true : false} />


                  {!todo.isEditing ? (

                  <span 
                    onDoubleClick={() => props.markAsEditing(todo.id)}
                    className={ `todo-item-label 
                    ${todo.isComplete ? 'line-through' : ''}
                    `}> 
                    {todo.title} 
                  </span>

                  ) : (

                  <input 
                    type="text"
                    onBlur={(event) => props.updateTodo(event, todo.id)}
                    onKeyDown={event => {
                      if(event.key === 'Enter'){
                        props.updateTodo(event, todo.id);
                      }else if(event.key === 'Escape'){
                        props.escapeEditing(event, todo.id);
                      }
                    }}
                    className="todo-item-input"
                    defaultValue={todo.title}
                    autoFocus
                  />

                  )}


                </div>
                <button
                onClick={() => props.deleteTodo(todo.id)}
                >
                 
                  <img className="delete-icon" src={deleteIcon} alt="img"/>
                </button>
              </li>

              ))} 
              {/* end of map */}

            </ul>
    )
}
