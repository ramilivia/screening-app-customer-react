import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addClient } from '../../redux/api/api.actions';
import { toggleModalClient } from '../../redux/screen/screen.actions';
import Modal from '../Modal/Modal';
import styles from './ModalClient.module.scss';
import classnames from 'classnames';
import Field from '../Field/Field';
import Button, { BUTTON_TYPE } from '../Button/Button';


const ModalClient = () => {
    const dispatch = useDispatch();
    const show = useSelector(state => state.screen.showModalClient);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [age, setAge] = useState(null);
    const [errorName, setErrorName] = useState(null);
    const [errorEmail, setErrorEmail] = useState(null);

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangeFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const onChangeLastName = (e) => {
        setLastName(e.target.value);
    }

    const onChangeAge = (e) => {
        setAge(e.target.value);
    }

    const onSend = () => {
        if (!name) {
            setErrorName('Name cannot be empty');
        } else {
            setErrorName(null);
        }
            
        if(!email) {
            setErrorEmail('Email cannot be empty')
        } else {
            setErrorEmail(null);
        }
            
        if(name && email) {
            let favoriteVenues = [];
            dispatch(addClient({name, email, firstName, lastName, age, favoriteVenues}));
            setName(null);
            setEmail(null);
            setFirstName(null);
            setLastName(null);
            setAge(null);
            closeModal();
        }
    }

    const closeModal = () => {
        setErrorName(null);
        setErrorEmail(null);
        dispatch(toggleModalClient())
    }

    const renderError = (error) => {
        return error ?  <p className={classnames(styles.error)}>{error}</p> : null;
    }

    return (
        <Modal show={show} title={'New Client'} className={classnames(styles.ModalClient)} onClose={closeModal}>
            {renderError(errorName)}
            {renderError(errorEmail)}
            <form className={classnames(styles.form)}>
                <Field label='Name' onChange={onChangeName} value={name}/>
                <Field label='Email' onChange={onChangeEmail} value={email}/>
                <Field label='First Name' onChange={onChangeFirstName} value={firstName}/>
                <Field label='Last Name' onChange={onChangeLastName} value={lastName}/>
                <Field label='Age' onChange={onChangeAge} value={age}/>
            </form>
            <Button onClick={() => {onSend()}} text='SUBMIT' type={BUTTON_TYPE.MODAL}/>
        </Modal>
    );
}

export default ModalClient;