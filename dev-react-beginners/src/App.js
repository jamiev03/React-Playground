import React, { useEffect, useState } from 'react';
import './App.css'

const App = () => {

  const APP_ID = '0OdUWJ0sBjDrqHygGUXeCF';
  const APP_KEY = 'BQAIERWZe0pP14FXz58Yyv5UGSQ08MmrR-hB9Z0DI9Ubd24sTyryqMgFqhlhexGkZpymUJW3jsf7hV3p3HGUG3PT2gkdYf9Mj3ORiE6B596mPGEHgquM18fPkwQ7QmOMbc2CadeAHjydmibE2Bam7rx417iwaTg';

  const exampleReq = `https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF" -H "Authorization: Bearer {${APP_KEY}}`;

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('Effect has been run');
  })


  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button onClick={() => setCounter(counter + 1)}className="search-button" 
        type="submit">{counter}</button>
      </form>
    </div>
  );
}

export default App;