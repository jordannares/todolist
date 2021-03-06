import { useEffect, useRef, useState } from 'react';
// import Another from './components/Another';
import './Style.css';
import NoTodos from './components/NoTodos';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import useLocalStorage from './hooks/useLocalStorage';
import { TodosContext } from './context/todosContext';
import { CSSTransition, SwitchTransition } from 'react-transition-group';


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



  const [filter, setFilter] = useState('all');
 
  function todosFiltered() {

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
    <TodosContext.Provider 
      value={{ 
        todos, 
        setTodos, 
        idForTodo, 
        setIdForTodo, 
        todosFiltered, 
        filter, 
        setFilter
      }}>

     
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

            <CSSTransition
              in={name.length > 0}
              timeout={300}
              classNames="slide-vertical"
              unmountOnExit
            >
            {<p className="name-label">Hello {name}</p>}
            </CSSTransition>

          </div>

          <h2>Todo App</h2>

          <TodoForm />
          
          <SwitchTransition mode="out-in" >

            <CSSTransition
              key={todos.length > 0}
              timeout={300}
              classNames="slide-vertical"
              unmountOnExit
            >

            { todos.length > 0 ? <TodoList /> : <NoTodos/> }

            </CSSTransition>
          </SwitchTransition>
          
        </div>

    </TodosContext.Provider>
  );
}

export default App;
