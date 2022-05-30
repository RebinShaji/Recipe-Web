import React, { useEffect, useState } from "react";
import Item from "./Item";
import "./style2.css";

const Recipe = () => {
    const APP_ID = "4e2ebe50";
    const APP_KEY = "%20eb94f7e2af9765f6357b1389e13aa32a";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    };

    const updateSearch = e => {
       setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        // setSearch('');
    };

    return (
       <div className="Recipe">
        <form onSubmit={getSearch} className="search-form">
            <input 
              className="search-bar"
              type="text"
              value={search}
              onChange={updateSearch} />
            <button className="search-button" type="submit"> Search </button>
        </form>
        <div className="mainheading"><h1>Recipes</h1></div>
        <div className="recipes">
        {recipes.map(recipe => (
            <Item
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} />
        ))}
        </div>
       </div>
    );
};

export default Recipe;