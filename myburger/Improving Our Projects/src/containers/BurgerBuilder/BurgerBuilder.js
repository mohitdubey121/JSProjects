import React, { Component } from 'react'
import axios from '../../axios-orders'
import Auxiliary from '../../hoc/auxiliary'
import Burger from '../../components/Burger/Burger.js'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummory from '../../components/Burger/OrderSummory/OrderSummory'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'


class burgerBuilder extends Component {
    //  constructor(props){
    //      super()
    //      this.state = {...}
    //  }

    state = {
        purchasing: false,
    }

    componentDidMount() {
      this.props.onInitIngredients();
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
        if(this.props.isAuthenticated){
            this.setState({ purchasing: true })
        }
        else {
            this.props.onSetAuthRedirectPath('/checkout')
            this.props.history.push('/auth')
        }
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    continuePurchase = () => {
        this.props.onInitPurchase();
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
        let burger = this.props.error ? <p> Ingredient Can't be Loaded </p> : <Spinner />

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
                        price={this.props.price} 
                        isAuth={this.props.isAuthenticated}/>
                </Auxiliary>
            );

            orderSummory = <OrderSummory
                ingredients={this.props.ings}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinue={this.continuePurchase}
                price={this.props.price} />
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
        ings : state.burgerBuilder.ingredients,
        price : state.burgerBuilder.totalPrice,
        error : state.burgerBuilder.error,
        isAuthenticated : state.auth.token != null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (igid) => dispatch(actions.addIngredient(igid)),
        onIngredientRemoved: (igid) => dispatch(actions.removeIngredient(igid)),
        onInitIngredients : () => dispatch(actions.initIngredient()),
        onInitPurchase : () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath : (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(burgerBuilder, axios));