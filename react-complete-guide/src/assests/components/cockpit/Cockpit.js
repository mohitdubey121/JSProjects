import React, {useEffect, useRef, useContext} from 'react';
import './cockpit.css';
import Person from '../Persons/Person/Person';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

  const toggleBtnRef = useRef(null);
  
  const authcontext = useContext(AuthContext)

  useEffect(() =>  {
    console.log('[cockpit.js] useEffect');
      // setTimeout(() => {
      //  alert('Save data to cloud');
      // },1000);
      toggleBtnRef.current.click();
      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect');
      };
    },[])  

  useEffect(()=>{
    console.log('[cockpit.js] useEffect 2')

      return () => {
        console.log('[Cockpit.js] cleanup work in 2useEffect');
      }
    });


  const classes = [];
  let btnClass = '';
  if (props.personsLength <= 2){
    classes.push('red');
  }
    
  if (props.personsLength <= 1){
    classes.push('bold');
  }
  
  if (props.showPersons){
    btnClass = 'abc'
  }

  return (  
      <div >
          <h1> {props.title}</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button ref={toggleBtnRef}
          className={btnClass}
          onClick = {props.clicked}>Toggle name
          </button>
          <button onClick = {authcontext.login}>Log in</button>}
      </div>
  )
}
export default React.memo(cockpit);
        