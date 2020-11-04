import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import styles from './Modal.module.scss';

const Modal = () => {
    const show = useSelector(state => state.screen.modalShow);
    
    return (
        <div className={classnames(styles.Modal, show ? styles.show : null)}>
            MODAL
        </div>
    );
}

export default Modal;