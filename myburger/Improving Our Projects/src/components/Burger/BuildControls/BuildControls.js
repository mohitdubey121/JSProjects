import React from 'react'
import classes from  './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label : 'Salad' , type : 'salad'},
    {label : 'Bacon' , type : 'bacon'},
    {label : 'Meat' , type : 'meat'},
    {label : 'Cheese' , type : 'cheese'}
];

const buildControls = (props) => (
    <div className = {classes.BuildControls}>
        <p>Current Price : <strong>  {props.price.toFixed(2)} </strong></p>
        {controls.map(el => (
            <BuildControl
                key = {el.label}
                label = {el.label}
                added = {() => props.ingredientAdded(el.type)}
                removed = {() => props.ingredientRemoved(el.type)}
                disabled = {props.disabled[el.type]}/>
        ))}
        <button
            className = {classes.OrderButton}
            disabled = {!props.purchaseable}
            onClick = {props.ordered}>{props.isAuth ? 'ORDER NOW' : 'Sign Up To Order'}  
        </button>
    </div>
)
export default buildControls;


