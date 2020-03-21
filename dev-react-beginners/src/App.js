import React, { useEffect, useState } from 'react';
import './App.css'
import Recipe from './components/Recipe';


const App = () => {

  const APP_ID = '6e228a6b';
  const APP_KEY = 'd68ee4924f434889cfa7e5b97d70c97e';

  //setting state to equal whatever data is coming back from the API call. Which is in an array of objects form.
  const [recipes, setRecipes] = useState([]);

  const fetchSrc = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  //Used to allow the getRecipes to only run once on load. Rather than loading each time the app is refreshed. The [] callback does this.
  useEffect(() => {
    getRecipes();
  }, [])

  //API call to get recipes from src and setting the data to a .json format
  const getRecipes = async () => {
    const response = await fetch(fetchSrc);
    const data = await response.json();
    //setRecipes to data.hits now all the recipes are in the state.
    setRecipes(data.hits);
    console.log(data.hits);

  }


  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" 
        type="submit">Search</button>
      </form>
      {/* the data from recipes in an array and we can map over all the objects in the array. */}
      {recipes.map(recipe => (
        <Recipe />
      ))}
    </div>
  );
}

export default App;