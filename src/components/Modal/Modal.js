import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import styles from './Modal.module.scss';

const Modal = ({show, title, onClose, children}) => {
    console.log(show);
    return (
        <div>
            <div className={classnames(styles.ModalOverlay, show ? styles.showOverlay : styles.hideOverlay)} onClick={onClose}/>
            <div className={classnames(styles.Modal, show ? styles.show : null)}>
                <div className={classnames(styles.title)}>
                    <h2>{title}</h2>
                </div>
                {children}
            </div>
        </div>
    );
}

export default Modal;