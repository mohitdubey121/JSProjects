import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
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
        let summory = <Redirect to="/" />
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to = "/"/> : null;
            summory = (
                <div>
                    {purchasedRedirect}
                    < CheckoutSummary
                        ingredients={this.props.ings}
                        checkoutCancelled={this.cancelBtnHandler}
                        checkoutContinued={this.continuedBtnHandler} />
                    <Route
                        path={this.props.match.path + '/contact-data'}
                        component={ContactData} />
                </div>
            )
        }
        return summory
    }
}
const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased : state.order.purchased
    }
}

export default connect(mapStateToProps)(Checkout);