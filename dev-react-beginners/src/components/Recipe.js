import React from 'react';
import style from '../modules/recipe.module.css'
import Stars from './Stars';

const Recipe = ( {title, calories, image, ingredients } ) => {
    let id = 0;
    return (
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <Stars />
            <ul className={style.list}>
            {/* map over the ingredients object and for each iteration we return ingredient.text within an li. Note when returning html the arrow function req () type brackets. */}
                {ingredients.map(ingredient => (
                    <li key={id++}>{ingredient.text}</li>
                ))}
            </ul>
            <p>Calories:</p>
            <p className={style.calories}>{Math.floor(calories)}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    )
}

export default Recipe;