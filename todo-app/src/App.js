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
        completed: true
      },
      {
        id: 3,
        title: 'Seed tomatoes',
        completed: false
      }
    ]
  }

  markComplete = (e) => {
    console.log(this.props);
}

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}



export default App;
