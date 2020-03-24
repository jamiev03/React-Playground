import React, { Component } from 'react';
import './App.css';
import Modal from './components/Modal';

class App extends Component {
  state = { advice: '' };

  componentDidMount() {
    console.log('Component did mount');

  }


  render() {
    return (
      
      <Modal />
    )
  }
}

export default App;
