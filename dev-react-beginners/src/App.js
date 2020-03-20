import React, { useState } from 'react';
import './App.css'
import Tweet from './components/Tweet';


function App() {
 const [isRed, setRed] = useState(false);
 const [count, setCount] = useState(0);

 const increment = () => {
   setCount(count + 1);
 }

  return (
    <div className='app'>
      <button>Increment</button>
      <h1>{count}</h1>
      {/* <Tweet name="Jamie" message="Hi there this is cools!" likes="234" />
      <Tweet name="Alfred" message="something smells..." likes="334" />
      <Tweet name="Jody" message="Making cake is fun" likes="22134" />
      <Tweet name="Susan" message="I like trees." likes="234" /> */}
    </div>
  )
}

export default App;