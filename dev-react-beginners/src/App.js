import React, { Component } from 'react';
import Box from './components/Box'
import './App.css'


class App extends Component {
  state = {

  }
  render() {
    return (
      <div><h2>Hi there!!!</h2>
      <button>Click to vanish!</button>
      <Box />
      </div>
    )
  }
}

export default App;