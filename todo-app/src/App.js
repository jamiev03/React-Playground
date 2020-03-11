import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the garbage',
        completed: false
      },
      {
        id: 2,
        title: 'Buy milk',
        completed: false
      },
      {
        id: 3,
        title: 'Seed tomatoes',
        completed: false
      }
    ]
  }

  //Toggle complete:
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) })
}

  //Delete Todo- using the spread(...) operator to copy everything first, then filter through that list of todo and return only those that were not clicked based off of id reference.
  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} 
        deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}




export default App;
