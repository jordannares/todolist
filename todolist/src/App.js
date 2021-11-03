// import logo from './logo.svg';
import { useState } from 'react';
// import Another from './components/Another';
import './Style.css';
import NoTodos from './components/NoTodos';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish React Series',
      isComplete: false,
      isEditing: false,
    },
    {
      id: 2,
      title: 'Go to Grocery',
      isComplete: true,
      isEditing: false,
    },
    {
      id: 3,
      title: 'Do other thing',
      isComplete: false,
      isEditing: false,
    }
  ]);

//  const [todoInput, setTodoInput] = useState('');
 const [idForTodo, setIdForTodo] = useState(4);

/**
*** Add Todos ***
**/
  function addTodo(todo){
 
    setTodos([
      ...todos, 
      {
        id: idForTodo,
        title: todo,
        isComplete: false
      },
    ]);

    setIdForTodo((prevIdForTodo) => prevIdForTodo + 1); //increament todo id

  }

  function deleteTodo(id) {
    // console.log("deleteing todo id" + id );
    setTodos([...todos].filter(todo => todo.id !== id) );
  }

  function completeTodo(id) {

    const updatedTodos = todos.map(todo => {

     if(todo.id === id){
       todo.isComplete = !todo.isComplete;
     }

     return todo;

    });
    setTodos(updatedTodos);
  }



  function markAsEditing(id) {
    const updatedTodos = todos.map(todo => {

      if(todo.id === id){
        // todo.isEditing = !todo.isEditing;
        todo.isEditing = true;
      }
 
      return todo;
 
     });
     setTodos(updatedTodos);
  }

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
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>

        <TodoForm addTodo={addTodo}/>
        
        { todos.length > 0 ? (
      
            <TodoList
              todos={todos}
              completeTodo={completeTodo}
              markAsEditing={markAsEditing}
              updateTodo={updateTodo}
              escapeEditing={escapeEditing}
              deleteTodo={deleteTodo}
            />

        ) : (

          <NoTodos/>

        )}



      </div>
    </div>
  );
}

export default App;
