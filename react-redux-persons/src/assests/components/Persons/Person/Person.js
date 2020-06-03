import React, { Component } from 'react';
import Auxliary from '../../../hoc/auxiliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';
import './Person.css';
class Person extends Component {
    constructor(props){
        super()
        this.inputElement = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        this.inputElement.current.focus();
        console.log(this.context.authenticated);
    }
    render() {
        return (    
            <Auxliary>
               
                   {this.context.authenticated ? <p>Authenticated</p> : <p>Please Login In</p>}
                
                <p onClick = {this.props.click}>
                    I am a {this.props.name} and I am {this.props.age} years old 
                </p>
                <p>{this.props.children}</p>
                <input 
                type ='text'
                //ref = {inputel => this.inputElement = inputel}
                ref = {this.inputElement}
                onChange = {this.props.change}
                value = {this.props.name }
                />
            </Auxliary>
        );
    }  
}
export default withClass(Person,'Person');