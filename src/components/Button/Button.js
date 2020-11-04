import React from 'react';
import classnames from 'classnames';
import styles from './Button.module.scss';

export const BUTTON_TYPE = {
    MODAL: 'MODAL',
    SMALL: 'SMALL'
}

const Button = ({onClick, text, type = BUTTON_TYPE.SMALL}) => {
    
    return (
        <div className={classnames(styles.Button, styles[type.toLowerCase()])} onClick={onClick}>
            <p>{text}</p>
        </div>
    );
}

export default Button;