import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./component/searchBar";
import Recipecard from "./component/recipecard";




function App() {
  const [isloading,setIsloading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  // const apiUrl = `www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  //Funtion to search for recipes

  const searchRecipes = async () => {
setIsloading(true);
// const url = apiUrl + query;
const res = await fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
const data = await res.json();
console.log(data);
setRecipes(data.meals);
setIsloading(false);

  };

  useEffect(() => {
    searchRecipes()

  }, []);

  const handleSumit = Event => {
    Event.preventDefault()
    searchRecipes()
  };


  return (
    <div className="container">
    <h2>Luna's Recipe App</h2>
    <SearchBar
    handleSumit={handleSumit}
    value={query}
    onChange={Event => setQuery(Event.target.value)}
    isloading={isloading}
    />




    <div className="recipes">
    {recipes ? recipes.map((recipe) => (
       <Recipecard  key={recipe.idMeal} recipe={recipe} />
      
      ))
      : "No Recipes!"}
    </div>
    </div>
    
    
  );
}

export default App;
