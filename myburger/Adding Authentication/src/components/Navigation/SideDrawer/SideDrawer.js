import React from 'react'
import Logo from '../../Layout/Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import classes from './SideDrawer.css'
import Auxiliary from '../../../hoc/auxiliary'

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Auxiliary>
            <Backdrop show = {props.open} clicked = {props.closed}  />
                <div className = {attachedClasses.join(' ')}>
                    <div className = {classes.Logo}>
                        <Logo/>
                    </div>
                    <nav>
                        <NavigationItems isAuthenticated = {props.isAuth}/>
                    </nav> 
                </div>
        </Auxiliary>
    )
}

export default SideDrawer
