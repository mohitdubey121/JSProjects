import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'
import * as action from '../../store/actions/index'
import { connect } from 'react-redux'
import Spinner from '../../components/UI/Spinner/Spinner'

class Orders extends Component {

    componentDidMount() {
      this.props.onFetchOrders() 
    }

    render() {
        let orders = <Spinner /> ;
        if(!this.props.loading){
            orders = this.props.orders.map(order => {
                return(
                    <Order 
                    key = {order.id} 
                    ingredients = {order.ingredients}
                    price = {order.price}/>
                )
            })
        }
        return (
           orders 
        )
    }
}
const mapStateToProps = (state) => {
    return {
        orders : state.order.orders,
        loading : state.order.loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders : () => dispatch(action.fetchOrders())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders , axios))
