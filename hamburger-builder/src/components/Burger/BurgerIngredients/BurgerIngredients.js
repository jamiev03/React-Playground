import React, { Component } from 'react';
import BurgerIngredientsStyles from '../BurgerIngredients/BurgerIngredients.module.css';
import PropTypes from 'prop-types';

class BurgerIngredients extends Component {
    render () {
        let ingredient = null;

        switch ( this.props.type ) {
            case ( 'bread-bottom' ):
                ingredient = <div className={BurgerIngredientsStyles.BreadBottom}></div>;
                break;
            case ( 'bread-top' ):
                ingredient = (
                    <div className={BurgerIngredientsStyles.BreadTop}>
                        <div className={BurgerIngredientsStyles.Seeds1}></div>
                        <div className={BurgerIngredientsStyles.Seeds2}></div>
                    </div>
                );
                break;
            case ( 'meat' ):
                ingredient = <div className={BurgerIngredientsStyles.Meat}></div>;
                break;
            case ( 'cheese' ):
                ingredient = <div className={BurgerIngredientsStyles.Cheese}></div>;
                break;
            case ( 'bacon' ):
                ingredient = <div className={BurgerIngredientsStyles.Bacon}></div>;
                break;
            case ( 'salad' ):
                ingredient = <div className={BurgerIngredientsStyles.Salad}></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredients;

