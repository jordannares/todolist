import React, { Component, component } from 'react'

export default class AppClass extends Component {

    constructor(props) {

        super(props);

        this.state = {
            todos: [
                {
                  id: 1,
                  title: 'Finish React Serie Serie Serie Serie Serie',
                  isComplete: false,
                },
                {
                  id: 2,
                  title: 'Go to Grocery',
                  isComplete: true,
                },
                {
                  id: 3,
                  title: 'Do other thing',
                  isComplete: false,
                },
          ],
        };
    };

   

    addTodo = event => {
      
      this.setState(prevState => {

        const newTodos = [
          ...prevState.todos, 
          {
            id: 4,
            title: 'This is class base components',
            isComplete: false
          },
        ];

        return { todos: newTodos }
      });
    };

    

    render() {

        return (
            <div className="todo-app-container">
                <div className="todo-app">
                <h2>Todo App</h2>
                <form action="#" onSubmit={this.addTodo}>
                    <input 
                    type="text"
                    className="todo-input"
                    placeholder="What do you need to do?"
                    />
                </form>
                { 
                this.state.todos.map(( todo, index ) => (
                <div className=""> {todo.title} </div>
                ))
                }
                </div>
        </div>
        );

    }
}
