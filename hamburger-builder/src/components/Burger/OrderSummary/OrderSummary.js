import React from 'react';
import Auxillary from '../../../hoc/Auxillary';

const orderSummary = ({ ingredients }) => {
    const ingredientSummary = Object.keys(ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {ingredients[igKey]}
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
           <p>Confirm Order?</p>
       </Auxillary> 
    )
};

export default orderSummary;