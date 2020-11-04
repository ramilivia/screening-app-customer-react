import React from 'react';
import classnames from 'classnames'
import styles from './Field.module.scss';

const Field = ({label, onChange, value}) => {
    return (
        <div className={classnames(styles.Field)}>
            <p>{label}</p>
            <input onChange={onChange} value={value}/>
        </div>
    );
}

export default Field;