import React from 'react';
import Auxillary from '../../../hoc/Auxillary';
import Button from '../../UI/Modal/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        )
        })
    return (
       <Auxillary>
           <h3>Your Order</h3>
           <p>A bespoke burger with the following ingredients:</p>
           <ul>
               {ingredientSummary}
           </ul>
           <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
           <p>Proceed to Checkout?</p>
           <Button btnType='Danger' clicked={props.purchaseCancelled}>Cancel</Button>
           <Button btnType='Success' clicked={props.purchaseContinued}>Order Now</Button>
       </Auxillary> 
    )
};

export default orderSummary;