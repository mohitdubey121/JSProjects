import React, { Component } from 'react'

import Auxiliary from '../../hoc/auxiliary'
import Burger from '../../components/Burger/Burger.js'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummory from '../../components/Burger/OrderSummory/OrderSummory'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'
import { connect } from 'react-redux';
import * as actionTypes from '../../store/action';



class burgerBuilder extends Component {
    //  constructor(props){
    //      super()
    //      this.state = {...}
    //  }

    state = {
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get('https://react-my-burger-95b42.firebaseio.com/ingredient.json')
            .then(response => {
                this.setState({ ingredients: response.data })
            })
            .catch(error => {
                this.setState({ error: true })
            })
    }

    updatePurchaseableState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        return sum > 0 ;
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    continuePurchase = () => {
        this.props.history.push('/checkout');
    }

    render() {

        const disabledInfo = {
            ...this.props.ings
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummory = null;

        let burger = this.state.error ? <p> Ingredient Can't be Loaded </p> : <Spinner />

        if (this.props.ings) {
            burger = (
                <Auxiliary>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        purchaseable={this.updatePurchaseableState(this.props.ings)}
                        ordered={this.purchaseHandler}
                        price={this.props.price} />
                </Auxiliary>
            );

            orderSummory = <OrderSummory
                ingredients={this.props.ings}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinue={this.continuePurchase}
                price={this.props.price} />

            if (this.state.loading) {
                orderSummory = <Spinner />
            }
        }

        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} remove={this.purchaseCancelHandler}>
                    {orderSummory}
                </Modal>
                {burger}
            </Auxiliary>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price : state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (igid) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName : igid }),
        onIngredientRemoved: (igid) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName : igid })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(burgerBuilder, axios));