import React, { Component } from 'react';
import './App.css';
import Vehicle from './Vehicle/Vehicle'

class App extends Component {
  state = {
    vehicles: [
      { make: 'Hyundai', model: 'Elantra'},
      { make: 'Mazda', model: 'CX7'},
      { make: 'Toyota', model: 'Corolla'}
    ]
  }

  setMakeHandler = (newMake) => {
    this.setState ({
      vehicles: [
        { make: newMake, model: 'Elantra'},
        { make: 'Mazda', model: 'CX7'},
        { make: 'Toyota', model: 'Corolla'}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      vehicles: [
        { make: 'Hyundai', model: 'Elantra' },
        { make: event.target.value, model:'CX7'},
        { make: 'Toyota', model: 'Corolla'}
      ]
    })
  }

  render() {
    return (

      <div className="App">
        <h2>Hello World</h2>
        <p>This is a testing app!</p>

      <Vehicle
      make={this.state.vehicles[0].make} 
      model={this.state.vehicles[0].model}
       />
      <Vehicle
      make={this.state.vehicles[1].make} 
      model={this.state.vehicles[1].model}
      clicky={this.setMakeHandler.bind(this, 'Honda')}
      inputChanged={this.nameChangedHandler} />
      <Vehicle
      make={this.state.vehicles[2].make} 
      model={this.state.vehicles[2].model}/>
      </div>
    );
  }
}

export default App;
