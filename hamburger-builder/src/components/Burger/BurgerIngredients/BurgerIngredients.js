import React, { Component } from 'react';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients.module.css';
import PropTypes from 'prop-types';

class BurgerIngredients extends Component {
    render() {

        let ingredient = null;

        switch ( this.props.type ) {
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
            case ('cheese'):
                ingredient = <div className={BurgerIngredients.Cheese}></div>;
                break;
            case ('bacon'):
                ingredient = <div className={BurgerIngredients.Bacon}></div>;
                break;
            case ('salad'):
                ingredient = <div className={BurgerIngredients.Salad}></div>;
                break;
            default: 
                ingredient = null;
        }

    return ingredient;
    }
};

BurgerIngredients.PropTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredients;

