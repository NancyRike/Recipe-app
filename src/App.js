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
    <div className = "App container-fluid">
      <form onSubmit={getSearch} className="search_form input-group p-3 px-5">
        <input type="text" className="search_input form-control" value={search} onChange={updateSearch}/>
        <button type="submit" className="search_button input-group-text btn btn-secondary">Search</button>
      </form>
        <div className="row">
            {recipies.map(recipe =>(
            <div className="col-md-4 d-flex justify-content-around mb-4 flex-wrap">
            <Recipie
            key = {recipe.recipe.label}
            image= {recipe.recipe.image}
            title= {recipe.recipe.label}
            calories= {recipe.recipe.calories}
            ingredients = {recipe.recipe.ingredients}
            />
            </div>
            )) }
        </div>
    </div>
  );
};

export default App;
