import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import styles from './Modal.module.scss';

const Modal = ({show, title, onClose, children, className}) => {
    
    const [hide, setHide] = useState(false);

    const onHide = () => {
        setHide(true);
        onClose();
        //Wait for animation ending & restore state
        setTimeout(() => {
            setHide(false);
        }, 810);
    }

    

    return (
        <div>
            <div className={classnames(styles.ModalOverlay, show ? styles.showOverlay : styles.hideOverlay)} onClick={onHide}/>
            <div className={classnames(styles.Modal, show ? styles.show : null, hide ? styles.hide : null, className)}>
                <div className={classnames(styles.close)} onClick={onHide}>X</div>
                <div className={classnames(styles.title)}>
                    <h2>{title}</h2>
                </div>
                {children}
            </div>
        </div>
    );
}

export default Modal;