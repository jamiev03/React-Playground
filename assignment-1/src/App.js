import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  

  render() {
    return (

      <div className="App">
        <h2>Hello World</h2>
        <p>This is a testing app!</p>

        <UserInput />
        <UserOutput />
        <UserOutput />
        <UserOutput />

      </div>
    );
  }
}

export default App;
