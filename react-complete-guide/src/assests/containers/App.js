import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/auxiliary';
import AuthContext from '../context/auth-context';
import './App.css'



class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons:[
      {id:'sfiusaf', name:'max',age:30},
      {id:'sfkskfs', name:'malya',age:31 },
      {id:'hfiwjf' ,name:'mini',age:32 }
    ],
    otherState:'other state value',
    initialtoggle: false,
    showCockpit: true,
    changeCounter:0,
    authenticated:false
  }

static getDerivedStateFromProps(props, state){
  console.log('[App.js] getDerivedStateFromProps',props);
  return state;
}

shouldComponentUpdate(nextProps, nextState){
  console.log('[App.js] shouldComponentUpdate')
  return true;
}

componentDidUpdate(){
  console.log('[App.js] componentDidUpdate');
}
componentDidMount(){
  console.log('[App.js] componentDidMount')
}

changedNameHandler = (event,index) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === index;
  })

  const person = {
    ...this.state.persons[personIndex]
  }

  person.name=event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState((prevState,props) => {
    return {
      persons:persons,
      changeCounter: prevState.changeCounter + 1
    }
  });
}


deleteNameHandler = (personsIndex) => {
 //const persons = this.state.persons.slice;
 const persons = [...this.state.persons];
 persons.splice(personsIndex, 1);
 this.setState({persons: persons})
}

toggleNameHandler = () => {
  const showPersons= this.state.initialtoggle;
  this.setState({initialtoggle:!showPersons});
}
  
loginHandler = () => {
  this.setState({authenticated:true})
}



render () {
  console.log('[App.js] render')
  let persons = null;
  if(this.state.initialtoggle){
    persons = (
      <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deleteNameHandler}
            changed={this.changedNameHandler}
            isAuthenticated={this.state.authenticated}          
          />
      </div>
    );
  }

return (
  <Auxiliary>
    <button onClick = {() => 
      this.setState({showCockpit:false})
    }>showCockpit
    </button>

    <AuthContext.Provider value={{ 
      authenticated: this.state.authenticated,
      login:this.loginHandler
    }}>
    {this.state.showCockpit ? (
      <Cockpit
        title={this.props.appTitle}
        personsLength = {this.state.persons.length}
        showPersons = {this.state.initialtoggle}
        clicked = {this.toggleNameHandler}/>  
      ):null}
      {persons}  
      </AuthContext.Provider>
      
  </Auxiliary>
)
} 
}
export default withClass(App, 'App');


