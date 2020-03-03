import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Superman',
    coolname: 'AJAX'
  }

  updateNameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  
  render() {
    return (

      <div className="App">
        <h2>Hello World</h2>
        <p>This is a testing app!</p>

        <UserInput 
         updateName={this.updateNameHandler}
         currentName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput
         userName={this.state.username} />
        <UserOutput userName={this.state.coolname} />

      </div>
    );
  }
}

export default App;
