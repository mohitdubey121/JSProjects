import React from 'react'
import imgLogo from '../../../assets/Images/burger-logo.png'
import classes from './Logo.css'
const Logo = (props) => {
    return (
        <div className = {classes.Logo} style= {{height : props.height}}>
            <img src = {imgLogo} alt = 'img Logo'/>
        </div>
    )
}

export default Logo
