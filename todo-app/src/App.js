import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Take out the garbage',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Buy milk',
        completed: false
      },
      {
        id: uuidv4(),
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

  // Add todo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} 
          deleteTodo={this.deleteTodo}/>
        </div>
      </div>
    );
  }
}




export default App;
