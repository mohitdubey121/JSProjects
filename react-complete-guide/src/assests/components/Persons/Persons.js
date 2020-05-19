import React, { PureComponent } from 'react';
import Person from './Person/Person'
import PropTypes from 'prop-types'


class Persons extends PureComponent {
  // static getDerivedStateFromProps(props , state) {
  //   console.log('[Persons.js] getDerivedStateFromProps')
  //   return state;
  // }

  /* shouldComponentUpdate(nextProps, prevProps){
    console.log('[Person.js] shouldComponentUpdate');
    if (nextProps.persons !== this.props.persons){
      return true;
    }
    else{
      return false;
    }
  } */

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Person.js] getSnapshotBeforeUpdate')
    return {message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, Snapshot){
    console.log('[Persons.js] componentDidUpdate')
    console.log(Snapshot);
  }

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
  }

  render () {
    console.log('[Persons.js] rendering');
    return this.props.persons.map((person,index) => {
      return (
        <Person
        click = {() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        change = {(event) => this.props.changed(event,person.id)}
        />
        )
      }
    );
  }
} 

  Person.propTypes = {
    click:PropTypes.func,
    age:PropTypes.number,
    name:PropTypes.string,
    change:PropTypes.func
  }

export default Persons;