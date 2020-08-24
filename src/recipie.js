import React from 'react';
import './recipie.module.css';
import './App.css';


const Recipie = ({title,calories,image, ingredients}) => {
    return(
        
            <div className="recipie m-2 p-4 w-100 d-flex justify-content-center flex-column my-3">
                <h1>{title}</h1>
                <img className="image img-fluid" src={image} alt=""/>
                <ol>{ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                    ))}
                </ol>
                <p>{calories}</p>
            </div>     
    )
}

export default Recipie;