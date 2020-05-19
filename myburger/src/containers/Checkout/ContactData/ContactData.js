import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
class ContactData extends Component {
    state = {
        name : '',
        email : '',
        address : {
            street : '',
            pincode : '',
        },
        loading : false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading : true})
        const orders = {
            ingredients : this.props.ingredients,
            price : this.props.price,
            customer : {
                name : 'mohit dubey',
                address : {
                    street : 'janpad maidan',
                    pincode : 461775,
                    country : 'india'
                },
                email:'mohitdubey036@gmail.com'
            },
            delivery : 'fastest'
        } 
        // alert('You Can Continue');
        axios.post('/orders.json', orders)
        .then(response => {
            this.setState({loading : false })
            this.props.history.push('/');
        }).catch(error => {
           this.setState({loading : false })
        })
    }

    render() {
        let form = (
            <form>
            <input className = {classes.input} type = 'text' name = 'name' placeholder = 'Your Name'/>  
            <input className = {classes.input} type = 'email' name = 'email' placeholder = 'Your Email'/>  
            <input className = {classes.input} type = 'text' name = 'street' placeholder = 'Street'/>  
            <input className = {classes.input} type = 'text' name = 'pincode' placeholder = 'Pincode'/> 
            <Button btnType = 'Success' clicked = {this.orderHandler}> Order </Button> 
        </form>
        );
        if (this.state.loading){
            form = <Spinner/>
        }
        return (
            <div className = {classes.ContactData}>
                <h4>Enter Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData
