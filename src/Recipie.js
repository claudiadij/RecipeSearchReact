import React from 'react';
import style from './recipie.module.css';

const Recipie = ({ title, calories, image, ingredients }) => {
    return(
        <div className={style.recipie}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{parseFloat(calories).toFixed(0)} calories</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
};

export default Recipie;