import React from 'react';
import './App.css'

const App = () => {
  const sayHello = () => {
    console.log('Hi there!');
  };

  return (
    <div>
      <h1>Hello React</h1>
      <button onClick={sayHello}>Click for Greeting!</button>
    </div>
  )
}

export default App;