import React, {useEffect,useState} from 'react';
import Recipie from './recipie';
import './App.css';

const App = ()=>{  
  const App_id = "159514c4";
  const App_key = "acb82bbe060c1882aac66e34bc47b128";

const [recipies, setRecipies] = useState([]);
const[search, setSearch] = useState('')
const [query, setQuery] = useState('chicken')
  
useEffect(() =>{
  getRecipies();
}, [query]);

const getRecipies = async() =>{
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_key}`);
  const data = await response.json(); 
  setRecipies(data.hits);
  // console.log(data.hits);
}
const updateSearch = e => {
  setSearch (e.target.value);
}
const getSearch = e =>{
  e.preventDefault();
  setQuery(search);
}


  return (
    <div className = "App">
      <form onSubmit={getSearch} className="search_form">
        <input type="text" className="search_input" value={search} onChange={updateSearch}/>
        <button type="submit" className="search_button">Search</button>
      </form>
      {recipies.map(recipe =>( 
        <Recipie 
        key = {recipe.recipe.label}
        title= {recipe.recipe.label}
        calories= {recipe.recipe.calories}
        image= {recipe.recipe.image}
        ingredients = {recipe.recipe.ingredients}
        />
    )) }
    </div>
  );
};

export default App;
