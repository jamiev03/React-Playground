import React from 'react';
import style from '../modules/recipe.module.css'

const Recipe = ( {title, calories, image, ingredients } ) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
            {/* map over the ingredients object and for each iteration we return ingredient.text within an li. Note when returning html the arrow function req () type brackets. */}
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    )
}

export default Recipe;