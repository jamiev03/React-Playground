import React, { useEffect, useState } from 'react';
import './App.css'
import Recipe from './components/Recipe';


const App = () => {

  const APP_ID = '6e228a6b';
  const APP_KEY = 'd68ee4924f434889cfa7e5b97d70c97e';

  //setting state to equal whatever data is coming back from the API call. Which is in an array of objects form useState([]).
  const [recipes, setRecipes] = useState([]);

  //set state for search as an empty string and apply that as value to the input tag.
  const [search, setSearch] = useState('');

  //Only when search is clicked do we want the fetch to occur. query aka set as 'chicken' as default and applied to the fetchSrc.
  const [query, setQuery] = useState('chicken')

  const fetchSrc = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  //Used to allow the getRecipes to only run once on load. Rather than loading each time the app is refreshed. The [] callback does this.
  useEffect(() => {
    getRecipes();
  }, [query])

  //API call to get recipes from src and setting the data to a .json format
  const getRecipes = async () => {
    const response = await fetch(fetchSrc);
    const data = await response.json();
    //setRecipes to data.hits now all the recipe data are in the state.
    setRecipes(data.hits);
    console.log(data.hits);
  }

  //updateSearch function. We get an event from this every time the onChange is initiated. Then we setSearch to the event value aka the input value.
  const updateSearch = event => {
    setSearch(event.target.value);
    console.log(search);
  }

  //Add function to the form on submit. Prevent default behavior of page submit/refresh using e.preventDefault(). Then setQuery to the value of the search field.
  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" 
        type="submit">Search</button>
      </form>
      {/* the data from recipes in an array and we can map over all the objects in the array.  */}
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients} />
      ))}
    </div>
  );
}

export default App;