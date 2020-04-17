import React, { Component } from 'react';
import Auxillary from '../../../hoc/Auxillary';
import Button from '../../UI/Modal/Button/Button';

class OrderSummary extends Component {
    render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
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
           <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
           <p>Proceed to Checkout?</p>
           <Button btnType='Danger' clicked={this.props.purchaseCancelled}>Cancel</Button>
           <Button btnType='Success' clicked={this.props.purchaseContinued}>Order Now</Button>
       </Auxillary> 
    )
    }
};

export default OrderSummary;