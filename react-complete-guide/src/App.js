import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Jamie', age: 32},
      { name: 'Julia', age: 27},
      { name: 'Michelle', age: 26}
    ]
  }

  switchNameHandler = () => {
    // console.log('Was clicked!');
    //DON'T DO THIS- this.state.persons[0].name = 'Jacob';
    this.setState( {
      persons: [
        { name: 'Jamillion', age: 23},
        { name: 'Julia', age: 27},
        { name: 'Michelle', age: 20}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working.</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //Note this code below is what is actually run. Above looks like HTML but it is rendered into the code below. JSX.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Does this work now??'))
  }
}

export default App;
