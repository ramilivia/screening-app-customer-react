import React from 'react';
import classnames from 'classnames';
import styles from './Button.module.scss';

const Button = ({onClick, text}) => {
    
    return (
        <div className={classnames(styles.Button)} onClick={onClick}>
            <p>{text}</p>
        </div>
    );
}

export default Button;