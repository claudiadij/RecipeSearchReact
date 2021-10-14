import React, {useEffect, useState} from "react";
import Recipie from "./Recipie";
import './App.css';



const App = () => {

  const APP_ID = '245bd9e5';
  const APP_KEY = "5c44b5868272242517ff1fafb58578b3";

  const [recipies, setRecicpies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecicpies(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input 
          className="search-bar" 
          type="text" 
          value={search} 
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search Recipes
        </button> 
      </form>
      <div className="recipies">
      {recipies.map(recipie => (
        <Recipie 
          key={recipie.recipe.label}
          title={recipie.recipe.label} 
          calories={recipie.recipe.calories}
          image={recipie.recipe.image}
          ingredients={recipie.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
};

export default App;
