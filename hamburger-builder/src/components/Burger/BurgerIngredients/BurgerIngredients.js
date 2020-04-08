import React from 'react';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients.module.css';

const burgerIngredients = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className={BurgerIngredients.BreadBottom}></div>
            break;
        case ('bread-top'):
            ingredient = (
                <div className={BurgerIngredients.BreadTop}>
                    <div className={BurgerIngredients.Seeds1}></div>
                    <div className={BurgerIngredients.Seeds2}></div>
                </div>
            );
            break;
        case ('meat'):
            ingredient = <div className={BurgerIngredients.Meat}></div>;
            break;
    }
};

export default burgerIngredients;