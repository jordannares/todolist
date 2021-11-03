// import logo from './logo.svg';
import { useState } from 'react';
// import Another from './components/Another';
import './Style.css';
import deleteIcon from './assets/svg/delete-icon.svg';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish React Series',
      isComplete: false
    },
    {
      id: 2,
      title: 'Go to Grocery',
      isComplete: true
    },
    {
      id: 3,
      title: 'Do other thing',
      isComplete: false
    }
  ]);

 const [todoInput, setTodoInput] = useState('');
 const [idForTodo, setIdForTodo] = useState(4);

/**
*** Add Todos ***
**/
  function addTodo(event){
    event.preventDefault();


    if(todoInput.trim().length === 0){ // if input value is emty do not add 
      return;
    }

    setTodos([
      ...todos, 
      {
        id: idForTodo,
        title: todoInput,
        isComplete: false
      },
    ]);

    setTodoInput('');

    setIdForTodo((prevIdForTodo) => prevIdForTodo + 1); //increament todo id

  }

  function handleInput(event) {
    setTodoInput(event.target.value);
  }

  function deleteTodo(id){
    // console.log("deleteing todo id" + id );
    setTodos([...todos].filter(todo => todo.id !== id) );
  }

 
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <form action="#" onSubmit={addTodo} >
          <input 
            type="text"
            value={todoInput}
            onChange={handleInput}
            className="todo-input"
            placeholder="What do you need to do?"
          />
        </form>

        <ul className="todo-item-list">

          { todos.map(( todo, index ) => (

          <li key={todo.id} className="todo-item-container">
            <div className="todo-item">
              <input type="checkbox" />
              <span className="todo-item-label"> {todo.title} </span>
            </div>
            <button
            onClick={() => deleteTodo(todo.id)}
            >
              {/* <svg className="delete-icon">
                <path d="M89.87,99.53C82.56,106.88,75.44,114,68.3,121.19Q50.9,138.62,33.49,156c-2.11,2.13-4.43,3.43-7.5,2.5a6.65,6.65,0,0,1-2.8-11.21c4.62-4.8,9.4-9.45,14.12-14.16L78.83,91.64c.49-.49.94-1,1.92-2.12a25.5,25.5,0,0,1-3-2.25Q50.89,60.47,24.05,33.62c-2.05-2-3.44-4.26-2.73-7.25,1.24-5.27,7.49-6.93,11.52-3C39,29.4,45,35.53,51.11,41.61Q69.74,60.24,88.38,78.86c.45.46.93.89,1.6,1.52.69-.65,1.36-1.25,2-1.88q27.23-27.22,54.49-54.4a11.14,11.14,0,0,1,4.89-2.8c2.71-.66,5.42,1,6.73,3.56a6.43,6.43,0,0,1-1.2,7.73C153,36.6,149,40.52,145,44.48l-43.8,43.79c-.5.5-1,1-1.62,1.71.62.67,1.17,1.29,1.76,1.88q27.23,27.23,54.46,54.43c2,2,3.52,4.22,2.83,7.22a6.74,6.74,0,0,1-11.47,3.18q-8.08-8-16.13-16.11L91.68,101.2C91.18,100.7,90.64,100.24,89.87,99.53Z"/>
              </svg> */}
              <img className="delete-icon" src={deleteIcon}/>
            </button>
          </li>

          ))} 
          {/* end of map */}

        </ul>


      </div>
    </div>
  );
}

export default App;
