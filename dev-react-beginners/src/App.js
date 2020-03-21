import React, { useEffect, useState } from 'react';
import './App.css'

const App = () => {

  const APP_ID = '6e228a6b';
  const APP_KEY = 'd68ee4924f434889cfa7e5b97d70c97e';

  //setting state to equal whatever data is coming back from the API call. Which is in an array of objects form.
  const [recipes, setRecipes] = useState([]);

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    getRecipes();
  }, [])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    //setRecipes to data.hits now all the recipes are in the state.
    setRecipes(data.hits);

  }


  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" 
        type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;