import React from 'react';
import BurgerStyles from '../../modules/Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

    //Default javascript - Object has a 'keys' method which extract the keys of a given object and turns them into an array. An array of the keys.
    const burger = ( props ) => {
        let transformedIngredients = Object.keys( props.ingredients )
            .map( igKey => {
                return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                    return <BurgerIngredients key={igKey + i} type={igKey} />;
                });
            })
            .reduce((arr, el) => {
                return arr.concat(el)
            }, [])

            console.log(transformedIngredients);
    return (
        <div className={BurgerStyles.Burger}>
            <BurgerIngredients type="bread-top" />
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    );
};

export default burger;