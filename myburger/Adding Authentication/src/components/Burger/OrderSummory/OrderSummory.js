import React, { Component } from 'react'
import Auxiliary from '../../../hoc/auxiliary'
import Button from '../../UI/Button/Button'


class OrderSummory extends Component{

    componentDidUpdate(){
        console.log('[OrderSummory] it works in ComponentDidUpdate');
    }

    render(){
        const ingredientSummory = Object.keys(this.props.ingredients)
        .map(igkey => {
            return(
                <li key = {igkey}> 
                    <span style = {{textTransform : 'capitalise'}}> {igkey} </span> : {this.props.ingredients[igkey]}            
                </li>
            );
        });

        return(
            <Auxiliary>
                <h3> Your Order </h3>
                <p>A Delicious Burger with the following Ingredients</p>
                <p> <strong> Total Price = {this.props.price.toFixed(2)} </strong> </p>
                <ul>
                    {ingredientSummory}
                </ul>
                <p> Proceed to CheckOut? </p>
                <Button btnType = 'Danger' clicked = {this.props.purchaseCanceled } > CANCEL </Button>
                <Button btnType = 'Success' clicked = {this.props.purchaseContinue} > CONTINUE </Button>
            </Auxiliary>
        )
    }
}
export default OrderSummory;