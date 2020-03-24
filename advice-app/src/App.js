import React, { Component } from 'react';
import './App.css';
import Modal from './components/Modal';
import axios from 'axios';

class App extends Component {
  //create initial state- empty string
  state = { advice: '' };

  componentDidMount() {
    this.getAdvice();
  }

  //getAdvice method. get request using axios
  getAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
      const { advice } = response.data.slip;
      console.log(advice);

      //set the advice value retrieved from response.data.slip.advice to the advice in the state:
      this.setState({ advice: advice })

    })
    .catch((error) => {
      console.log(error);
    })
  }


  render() {
    const { advice } = this.state;

    return (
      <div>
        <Modal text={advice} />
      </div>
      
    )
  }
}

export default App;
