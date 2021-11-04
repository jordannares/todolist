import { useEffect, useMemo, useRef } from 'react';
// import Another from './components/Another';
import './Style.css';
import NoTodos from './components/NoTodos';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import useLocalStorage from './hooks/useLocalStorage';


function App() {

  // const [name, setName] = useState('');
  const [name, setName] = useLocalStorage('name', '');


  const nameInputEl = useRef(null);
  const [todos, setTodos] = useLocalStorage('todos', []);
  //   {
  //     id: 1,
  //     title: 'Finish React Series',
  //     isComplete: false,
  //     isEditing: false,
  //   },
  //   {
  //     id: 2,
  //     title: 'Go to Grocery',
  //     isComplete: true,
  //     isEditing: false,
  //   },
  //   {
  //     id: 3,
  //     title: 'Do other thing',
  //     isComplete: false,
  //     isEditing: false,
  //   }
  // ]);

//  const [todoInput, setTodoInput] = useState('');

//  const [idForTodo, setIdForTodo] = useState(4);

const [idForTodo, setIdForTodo] = useLocalStorage('idForTodo', 1);

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

  function remainingCalculation() {
    // console.log('remaining');
    // for(let index = 0; index < 2000000000; index++){}
    return todos.filter(todo => !todo.isComplete).length;
  }

  const remaining = useMemo(remainingCalculation, [todos]);

  function clearCompleted() {
    setTodos([...todos].filter(todo => !todo.isComplete));
  }

  function completeAllTodos() {
    const updatedTodos = todos.map(todo => {

      todo.isComplete = true;

      return todo;
 
     });

     setTodos(updatedTodos);
  }
 
  function todosFiltered(filter) {

    if(filter === 'all') {
      return todos;
    }else if( filter === 'active') {
      return todos.filter(todo => !todo.isComplete);
    }else if( filter === 'completed'){
      return todos.filter(todo => todo.isComplete)
    }
  }

  useEffect(() => {
    // console.log('use effect running');
    nameInputEl.current.focus();

    // setName(JSON.parse(localStorage.getItem('name')) ?? '');

    return function cleanup(){
      // console.log('cleaning up');
    }
  }, []);

  function handleNameInput(event) {
    setName(event.target.value);
    // localStorage.setItem('name', JSON.stringify(event.target.value))
  }

  return (
    <div className="todo-app-container">
      <div className="todo-app">

        <div className="name-container">
          <h2> What is your name? </h2>
          {/* <button className="mb-5" onClick={() => }>Get Ref</button> */}
          <form action="#" >
            <input 
              type="text" 
              ref={nameInputEl}
              className="todo-input" 
              placeholder="What is your name"
              value={name}
              onChange={handleNameInput}
            />
          </form>
          {name && <p className="name-label">Hello {name}</p>}
        </div>

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
              remaining={remaining}
              clearCompleted={clearCompleted}
              completeAllTodos={completeAllTodos}
              todosFiltered={todosFiltered}
            />

        ) : (

          <NoTodos/>

        )}

      </div>
    </div>
  );
}

export default App;
