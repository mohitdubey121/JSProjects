import React from 'react'
import classes from './BuildControl.css' 

const BuildControl = (props) => (
    <div className = {classes.BuildControl}>
        <div className = {classes.Label}>
            {props.label}
        </div> 
        <button className={BuildControl.Less}
            onClick = {props.removed}
            disabled = {props.disabled}>Less
        </button>
        <button
            className={BuildControl.More}
            onClick = {props.added} > More
        </button>
    </div>
)

export default BuildControl