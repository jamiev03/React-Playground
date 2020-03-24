import React, { Component } from 'react';
import './App.css';
import Modal from './components/Modal';
import axios from 'axios';

class App extends Component {
  //create initial state- empty string
  state = { advice: '' };

  //on render the first thing done is the API call.
  componentDidMount() {
    this.getAdvice();
  }

  //getAdvice 'method'. get request using axios npm install axios
  getAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
      //deconstruct the response in order to get only 'advice'
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
    //deconstruct advice from this.state, pass on to Modal as props.
    const { advice } = this.state;

    return (
      <div>
        <h1 className="header">Need some Advice?</h1>
        <Modal text={advice} />
      </div>
      
    )
  }
}

export default App;
