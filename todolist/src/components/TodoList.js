import React, { useContext } from 'react'
import deleteIcon from '../assets/svg/delete-icon.svg';
import TodoItemsRemaining from './TodoItemsRemaining';
import ClearTodoCompleted from './ClearTodoCompleted';
import TodoCompleteAll from './TodoCompleteAll';
import TodoFilters from './TodoFilters';
import useToggle from '../hooks/useToggle';
import { TodosContext } from '../context/todosContext';



export default function TodoList() {

    // const [oneVisible, setOneVisible] = useState(true);
    const {todosFiltered, todos, setTodos} = useContext(TodosContext);

    const [isFeaturesOneVisible, setIsFeaturesOneVisible] = useToggle();
    const [isFeaturesTwoVisible, setIsFeaturesTwoVisible] = useToggle();
    
    // const [filter, setFilter] = useState('all');


      // Delete Todo
  function deleteTodo(id) {
    // console.log("deleteing todo id" + id );
    setTodos([...todos].filter(todo => todo.id !== id) );
  }

  // Complete Todo
  function completeTodo(id) {

    const updatedTodos = todos.map(todo => {

    if(todo.id === id){
      todo.isComplete = !todo.isComplete;
    }

    return todo;

    });
    setTodos(updatedTodos);
  }

  //Mark as Editing
  function markAsEditing(id) {
    const updatedTodos = todos.map(todo => {

      if(todo.id === id){
        todo.isEditing = true;
      }

      return todo;

    });
    setTodos(updatedTodos);
  }

  // Update Todo
  function updateTodo(event, id) {
    const updateTodos = todos.map(todo => {

      if(todo.id === id){

          if(event.target.value.trim().length === 0){
            todo.isEditing = false;
            return todo;
          }

        todo.title = event.target.value;
        todo.isEditing = false;
      }

      return todo;

    });
    setTodos(updateTodos);

  }

  // Escape Editing
  function escapeEditing(event, id) {
    const updatedTodos = todos.map(todo => {

      if(todo.id === id){
        todo.isEditing = false;
      }

      return todo;

    });
    setTodos(updatedTodos);
  }

    return (
        <>
        <ul className="todo-item-list">

              { todosFiltered().map(( todo, index ) => (

              <li key={todo.id} className="todo-item-container">
                <div className="todo-item">
                  <input type="checkbox" onChange={() => completeTodo(todo.id)} checked={todo.isComplete ? true : false} />


                  {!todo.isEditing ? (

                  <span 
                    onDoubleClick={() => markAsEditing(todo.id)}
                    className={ `todo-item-label 
                    ${todo.isComplete ? 'line-through' : ''}
                    `}> 
                    {todo.title} 
                  </span>

                  ) : (

                  <input 
                    type="text"
                    onBlur={(event) => updateTodo(event, todo.id)}
                    onKeyDown={event => {
                      if(event.key === 'Enter'){
                        updateTodo(event, todo.id);
                      }else if(event.key === 'Escape'){
                        escapeEditing(event, todo.id);
                      }
                    }}
                    className="todo-item-input"
                    defaultValue={todo.title}
                    autoFocus
                  />

                  )}


                </div>
                <button
                onClick={() => deleteTodo(todo.id)}
                >
                 
                  <img className="delete-icon" src={deleteIcon} alt="img"/>
                </button>
              </li>

              ))} 
              {/* end of map */}

        </ul>

        <div className="toggles-container mb-5">
          <button 
            onClick={setIsFeaturesOneVisible}
            className="Button">
              Feature One Toggle
          </button>
          <button 
            onClick={setIsFeaturesTwoVisible}
            className="Button">
              Feature Two Toggle
          </button>
        </div>

        {isFeaturesOneVisible && (

          <div className="check-all-container">
              <TodoCompleteAll />
              <TodoItemsRemaining />
          </div>

        )}

        {isFeaturesTwoVisible && (

          <div className="other-buttons-container">
              <TodoFilters />
              <div>
                  {/* <button className="button">Clear Completed</button> */}
                  <ClearTodoCompleted />
              </div>
          </div>

        )}

       </>
    )
}
