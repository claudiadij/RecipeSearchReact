import React, {useEffect, useState} from "react";
import Recipie from "./Recipie";
import './App.css';
import * as ReactBootStrap from "react-bootstrap";


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
      <ReactBootStrap.Navbar bg="light" variant="light">
        <ReactBootStrap.Container>
        <ReactBootStrap.Navbar.Brand href="#home">Claudia's Recipes</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Nav className="me-auto">
          <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#features">My Recipe's</ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
      <form onSubmit={getSearch} className="search-form"> 
        <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Search for a recipe..."></input>
        <button className="search-button" type="submit">
          Search 
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
