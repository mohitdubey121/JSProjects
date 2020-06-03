import React from 'react'
import classes from './Order.css'
const Order = (props) => {

    const ingredients = []
    for (let ingredientName in props.ingredients) {
        console.log(ingredientName)
        console.log(props.ingredients)
        console.log(props.ingredients[ingredientName])
        ingredients.push({
            name: ingredientName,
            amount : props.ingredients[ingredientName]
        })
        console.log(ingredients)
    }

    const ingredientsOutput = ingredients.map(ig => {
        return <span
            style = {{
                textTransform : 'capitalise',
                display : 'inline-block',
                margin : '0 8px',
                border : '1px solid #ccc',
                padding : '5px'
            }}
        key = {ig.name} >  {ig.name} ({ig.amount}) </span>
})

    return (
        <div className={classes.Order}>
            <p> Ingredients :{ingredientsOutput} </p>
            <p> Price : <strong> USD {Number.parseFloat(props.price).toFixed(2)} </strong></p>
        </div>
    )
}

export default Order
