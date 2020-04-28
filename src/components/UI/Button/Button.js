import React from 'react';
import classes from './Button.module.css';
import Aux from '../../../hoc/auxiliary'

const Button = (props) => (
    <Aux>
        <button
            className={[classes.Button, classes[props.btnType]].join(' ')}
            onClick={props.clicked}>
            {props.children}
        </button>
    </Aux>
)

export default Button;