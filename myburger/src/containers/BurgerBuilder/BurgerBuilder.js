import React, { Component } from 'react'

import Auxiliary from '../../hoc/auxiliary'
import Burger from '../../components/Burger/Burger.js'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummory from '../../components/Burger/OrderSummory/OrderSummory'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'

const INGREDIENT_PRICES = {
    salad : 0.4,
    cheese : 0.5,
    meat : 1.3,
    bacon : 0.3
};

 class burgerBuilder extends Component {
    //  constructor(props){
    //      super()
    //      this.state = {...}
    //  }

    state = {
        ingredients : null,       
        totalPrice : 4,
        purchaseable : false,
        purchasing : false,
        loading : false,
        error : false
    }

    componentDidMount () {
        axios.get('https://react-my-burger-95b42.firebaseio.com/ingredient.json')
        .then(response => {
            this.setState({ingredients : response.data})
        })
        .catch(error => {
            this.setState({ error : true })
        })
    }

    updatePurchaseableState(ingredients){
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            },0);
        this.setState({ purchaseable : sum > 0 })
            
    }

    purchaseHandler = () => {
        this.setState({purchasing : true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing : false})
    }

    continuePurchase = () => {

        const queryParams = [];
        for ( let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname : '/checkout',
            search : '?' + queryString
        });
    }
          
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1 ;
        const updateIngredient = { 
            ...this.state.ingredients 
        };

        updateIngredient[type] = updatedCount
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
        this.setState({totalPrice : newPrice , ingredients : updateIngredient})
        this.updatePurchaseableState(updateIngredient);
    }

    removeIngredientHandler = (type) => {

        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount - 1 ;
        const updateIngredient = { 
            ...this.state.ingredients 
        };

        updateIngredient[type] = updatedCount
        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDeduction
        this.setState({totalPrice : newPrice , ingredients : updateIngredient})
        this.updatePurchaseableState(updateIngredient);

    }

    

    render(){
       
        const disabledInfo = {
            ...this.state.ingredients
        };

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummory = null;

        let burger = this.state.error ? <p> Ingredient Can't be Loaded </p> : <Spinner/>

        if (this.state.ingredients){
            burger = (
                <Auxiliary>
                    <Burger ingredients = {this.state.ingredients} />
                    <BuildControls 
                        ingredientAdded = {this.addIngredientHandler}
                        ingredientRemoved = {this.removeIngredientHandler}
                        disabled = {disabledInfo}
                        purchaseable = {this.state.purchaseable}
                        ordered = {this.purchaseHandler}
                        price = {this.state.totalPrice} />
                </Auxiliary>
            );

            orderSummory =  <OrderSummory 
            ingredients = {this.state.ingredients}
            purchaseCanceled = {this.purchaseCancelHandler}
            purchaseContinue = {this.continuePurchase}
            
            price = {this.state.totalPrice}/>

            if (this.state.loading){
                orderSummory = <Spinner/>
            }
        }

        return (
        <Auxiliary>
            <Modal show = {this.state.purchasing} remove = {this.purchaseCancelHandler}>
                {orderSummory}
            </Modal>
                {burger}
        </Auxiliary>
        );
    }
 }

 export default withErrorHandler(burgerBuilder, axios);