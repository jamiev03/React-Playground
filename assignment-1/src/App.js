import React, { Component } from 'react';
import './App.css';
import './Vehicle/Vehicle'

class App extends Component {
  state = {
    vehicles: [
      { name: 'Jamie', age: 32},
      { name: 'Julia', age: 27},
      { name: 'Michelle', age: 26}
    ]
  }


  render() {
    return (

      <div>
        <h2>Hello World</h2>
        <p>This is a testing app!</p>
      </div>

      <Vehicle
      name={this.state.vehicles[0].name} 
      age={this.state.vehicles[0].age} />
      <Vehicle
      name={this.state.vehicles[1].name} 
      age={this.state.vehicles[1].age}
      clicky={this.switchNameHandler.bind(this, 'JAcob')} 
      inputChanged={this.nameChangedHandler}>My Hobbies: Racing</Vehicle>
      <Vehicle
      name={this.state.vehicles[2].name} 
      age={this.state.vehicles[2].age}/>
      </div>
    );
  }
}

export default App;
