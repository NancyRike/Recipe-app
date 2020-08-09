import React from 'react';
import styling from './recipie.module.css';

const Recipie = ({title,calories,image, ingredients}) => {
    return(
        <div className={styling.recipie}>
            <h1>{title}</h1>
            <ol>{ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className={styling.image} src={image} alt=""/>
        </div>
    )
}

export default Recipie;