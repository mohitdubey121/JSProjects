import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../../containers/Checkout/ContactData/ContactData'
import { connect } from 'react-redux';

class Checkout extends Component {

    cancelBtnHandler = () => {
        this.props.history.goBack();
    }

    continuedBtnHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    
    render() {
       
        return (
            <div>
                < CheckoutSummary
                 ingredients = {this.props.ings} 
                 checkoutCancelled = {this.cancelBtnHandler}
                 checkoutContinued = {this.continuedBtnHandler}/>
                <Route 
                path = {this.props.match.path + '/contact-data'}
                component = {ContactData} />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ings : state.ingredients,
        price : state.totalPrice
    }
}
export default connect(mapStateToProps)(Checkout);